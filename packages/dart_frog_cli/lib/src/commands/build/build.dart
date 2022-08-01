import 'package:dart_frog_cli/src/command.dart';
import 'package:dart_frog_cli/src/commands/build/templates/dart_frog_prod_server_bundle.dart';
import 'package:dart_frog_cli/src/commands/commands.dart';
import 'package:mason/mason.dart';

/// {@template build_command}
/// `dart_frog build` command which creates a production build`.
/// {@endtemplate}
class BuildCommand extends DartFrogCommand {
  /// {@macro build_command}
  BuildCommand({super.logger, GeneratorBuilder? generator})
      : _generator = generator ?? MasonGenerator.fromBundle;

  final GeneratorBuilder _generator;

  @override
  final String description = 'Create a production build.';

  @override
  final String name = 'build';

  @override
  Future<int> run() async {
    final generator = await _generator(dartFrogProdServerBundle);
    var vars = <String, dynamic>{};

    logger.detail('[codegen] running pre-gen...');
    await generator.hooks.preGen(
      vars: vars,
      workingDirectory: cwd.path,
      onVarsChanged: (v) => vars = v,
    );

    logger.detail('[codegen] running generate...');
    final _ = await generator.generate(
      DirectoryGeneratorTarget(cwd),
      vars: vars,
      fileConflictResolution: FileConflictResolution.overwrite,
    );

    logger.detail('[codegen] running post-gen...');
    await generator.hooks.postGen(workingDirectory: cwd.path);

    logger.detail('[codegen] complete.');
    return ExitCode.success.code;
  }
}
