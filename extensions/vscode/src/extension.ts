import * as vscode from "vscode";
import {
  installCLI,
  newRoute,
  newMiddleware,
  updateCLI,
  create,
  startDevServer,
  stopDevelopmentServer,
} from "./commands";
import {
  readDartFrogCLIVersion,
  isCompatibleDartFrogCLIVersion,
  isDartFrogCLIInstalled,
  openChangelog,
  readLatestDartFrogCLIVersion,
  suggestInstallingDartFrogCLI,
} from "./utils";
import { DebugCodeLensProvider, RunCodeLensProvider } from "./code-lens";

/**
 * This method is called when the extension is activated.
 *
 * The extension is activated the very first time a command is executed or
 * if the workspace contains a pubspec.yaml file.
 *
 * @param {vscode.ExtensionContext} context
 * @returns The same instance of the extension context passed in.
 * @see {@link https://code.visualstudio.com/api/references/activation-events} for further details about
 * extension activation events.
 */
export function activate(
  context: vscode.ExtensionContext,
  ensureCompatibleCLI: () => Promise<void> = ensureCompatibleDartFrogCLI
): vscode.ExtensionContext {
  if (!isDartFrogCLIInstalled()) {
    suggestInstallingDartFrogCLI();
  } else {
    ensureCompatibleCLI();
  }

  // TODO(alestiago): Specify a better document selector, that only applies to
  // Dart files under routes in a Dart Frog project.
  vscode.languages.registerCodeLensProvider("*", new DebugCodeLensProvider());
  vscode.languages.registerCodeLensProvider("*", new RunCodeLensProvider());

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.create", create),
    vscode.commands.registerCommand("extension.install-cli", installCLI),
    vscode.commands.registerCommand("extension.update-cli", updateCLI),
    vscode.commands.registerCommand("extension.new-route", newRoute),
    vscode.commands.registerCommand("extension.new-middleware", newMiddleware),
    vscode.commands.registerCommand(
      "extension.start-development-server",
      startDevServer
    ),
    vscode.commands.registerCommand(
      "extension.stop-development-server",
      stopDevelopmentServer
    )
  );
  return context;
}

/**
 * Checks if the version of Dart Frog CLI installed in the user's system is
 * compatible with this extension, suggesting to install if it is not.
 *
 * This method should be called upon activation of the extension to ensure that
 * the version of Dart Frog CLI installed in the user's system is compatible
 * with this extension.
 *
 * If the version of Dart Frog CLI installed in the user's system is not
 * compatible with this extension, the user is prompted to update Dart Frog CLI
 * or ignore the warning. If the user chooses to update Dart Frog CLI, the
 * extension will attempt to update Dart Frog CLI. Otherwise, the user will
 * proceed to use the extension at their own risk.
 *
 * If Dart Frog CLI is not installed in the user's system, this method will
 * do nothing and returns immediately.
 *
 * @see {@link isCompatibleDartFrogCLIVersion}, to check if the version of
 * Dart Frog CLI installed in the user's system is compatible with this
 * extension.
 */
export async function ensureCompatibleDartFrogCLI(): Promise<void> {
  const version = readDartFrogCLIVersion();
  if (!version) {
    return;
  }

  const versionIsCompatible = isCompatibleDartFrogCLIVersion(version);
  if (versionIsCompatible) {
    return;
  }

  const latestVersion = readLatestDartFrogCLIVersion();
  if (!latestVersion) {
    return;
  }

  const options = ["Update Dart Frog CLI", "Changelog", "Ignore"];
  const shouldUpdate = isCompatibleDartFrogCLIVersion(latestVersion);
  if (!shouldUpdate) {
    options.shift();
  }

  const selection = await vscode.window.showWarningMessage(
    `Dart Frog CLI version ${version} is not compatible with this extension.`,
    ...options
  );
  switch (selection) {
    case "Update Dart Frog CLI":
      updateCLI();
      break;
    case "Changelog":
      openChangelog(latestVersion);
      break;
    case "Ignore":
      break;
    default:
      break;
  }
}
