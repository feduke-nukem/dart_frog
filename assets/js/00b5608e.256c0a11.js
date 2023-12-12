"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[770],{9150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(5893),r=t(1151);const s={sidebar_position:6,title:"\ud83e\udeaa  Authentication with JWT",description:"Build an authenticated dart frog service."},o="Authentication with JWT \ud83e\udeaa",i={id:"tutorials/jwt_authentication",title:"\ud83e\udeaa  Authentication with JWT",description:"Build an authenticated dart frog service.",source:"@site/docs/tutorials/jwt_authentication.md",sourceDirName:"tutorials",slug:"/tutorials/jwt_authentication",permalink:"/docs/tutorials/jwt_authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/tutorials/jwt_authentication.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\ud83e\udeaa  Authentication with JWT",description:"Build an authenticated dart frog service."},sidebar:"docs",previous:{title:"\ud83d\udd0c WebSocket Counter",permalink:"/docs/tutorials/web_socket_counter"},next:{title:"Deploy",permalink:"/docs/category/deploy"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Creating a new app",id:"creating-a-new-app",level:2},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"The hardcode domain code",id:"the-hardcode-domain-code",level:2},{value:"Writing a Sign In route",id:"writing-a-sign-in-route",level:2},{value:"Requiring authentication to access routes",id:"requiring-authentication-to-access-routes",level:2},{value:"Protecting the authentication token",id:"protecting-the-authentication-token",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"authentication-with-jwt-",children:"Authentication with JWT \ud83e\udeaa"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Difficulty"}),": \ud83d\udfe0 Intermediate",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.strong,{children:"Length"}),": 30 minutes"]}),(0,a.jsxs)(n.p,{children:["Before getting started, ",(0,a.jsx)(n.a,{href:"/docs/overview#prerequisites",children:"read the Dart Frog prerequisites"})," to make sure your development environment is ready."]})]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, we're going to build an app that exposes endpoints accessible only to users\nthat have been authenticated."}),"\n",(0,a.jsx)(n.p,{children:"When we're done, we should be able to authenticate with a user credentials, and access the\nprotected routes."}),"\n",(0,a.jsxs)(n.p,{children:["Like mentioned in the ",(0,a.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/advanced/authentication",children:"Dart Frog Authentication documentation"}),",\nthere are many ways of implementing authentication in a backend, for this tutorial we will use a\nhardcoded, in memory, database of users and ",(0,a.jsx)(n.a,{href:"https://jwt.io/",children:"JSON Web Tokens"})," (or for short JWTs)\nfor the user's authentication token."]}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-new-app",children:"Creating a new app"}),"\n",(0,a.jsx)(n.p,{children:"To create a new Dart Frog app, open your terminal, change to the directory where you'd like to create the app, and run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dart_frog create authenticated_app\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should see an output similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\u2713 Creating authenticated_app (0.1s)\n\u2713 Installing dependencies (1.7s)\n\nCreated authenticated_app at ./authenticated_app.\n\nGet started by typing:\n\ncd ./authenticated_app\ndart_frog dev\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Install and use the ",(0,a.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog",children:"Dart Frog VS Code extension"})," to easily create Dart Frog apps within your IDE."]})}),"\n",(0,a.jsx)(n.h2,{id:"running-the-development-server",children:"Running the development server"}),"\n",(0,a.jsxs)(n.p,{children:["You should now have a directory called ",(0,a.jsx)(n.code,{children:"authenticated_app"}),". Let's change directories into the newly created project:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd authenticated_app\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dart_frog dev\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will start the development server on port ",(0,a.jsx)(n.code,{children:"8080"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\u2713 Running on http://localhost:8080 (1.3s)\nThe Dart VM service is listening on http://127.0.0.1:8181/YKEF_nbwOpM=/\nThe Dart DevTools debugger and profiler is available at: http://127.0.0.1:8181/YKEF_nbwOpM=/devtools/#/?uri=ws%3A%2F%2F127.0.0.1%3A8181%2FYKEF_nbwOpM%3D%2Fws\n[hotreload] Hot reload is enabled.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure it's working by opening ",(0,a.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," in your browser or via ",(0,a.jsx)(n.code,{children:"cURL"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --request GET \\\n  --url http://localhost:8080\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If everything succeeded, you should see ",(0,a.jsx)(n.code,{children:"Welcome to Dart Frog!"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"the-hardcode-domain-code",children:"The hardcode domain code"}),"\n",(0,a.jsxs)(n.p,{children:["To keep the tutorial simple and focused on authentication, our database of users will be hardcoded and\nthe ",(0,a.jsx)(n.code,{children:"User"})," model will be simple, containing just an id and a name."]}),"\n",(0,a.jsx)(n.p,{children:"For next steps, use the code below to create the domain classes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// lib/user.dart\nclass User {\n  const User({\n    required this.id,\n    required this.name,\n    required this.password,\n  });\n\n  final String id;\n  final String name;\n  final String password;\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// lib/authenticator.dart\nimport 'package:authenticated_app/user.dart';\n\nclass Authenticator {\n  static const _users = {\n    'john': User(\n      id: '1',\n      name: 'John',\n      password: '123',\n    ),\n    'jack': User(\n      id: '2',\n      name: 'Jack',\n      password: '321',\n    ),\n  };\n\n  static const _passwords = {\n    // \u26a0\ufe0f Never store user's password in plain text, these values are in plain text\n    // just for the sake of the tutorial.\n    'john': '123',\n    'jack': '321',\n  };\n\n  User? findByUsernameAndPassword({\n    required String username,\n    required String password,\n  }) {\n    final user = _users[username];\n\n    if (user != null && _passwords[username] == password) {\n      return user;\n    }\n\n    return null;\n  }\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We also need to provide our ",(0,a.jsx)(n.code,{children:"Authenticator"})," to our routes. It will be used by the sign in route and all others that\nrequire authentication."]}),"\n",(0,a.jsxs)(n.p,{children:["In order to do so, we can use ",(0,a.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/basics/dependency-injection",children:"Dart frog's dependency injection"}),"\nand create a middleware in the root of our ",(0,a.jsx)(n.code,{children:"routes"})," folder with the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// lib/_middleware.dart\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nHandler middleware(Handler handler) {\n  return handler.use(\n    provider<Authenticator>(\n      (_) => Authenticator(),\n    ),\n  );\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Install and use the ",(0,a.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog",children:"Dart Frog VS Code extension"})," to easily create new middleware within your IDE."]})}),"\n",(0,a.jsx)(n.h2,{id:"writing-a-sign-in-route",children:"Writing a Sign In route"}),"\n",(0,a.jsx)(n.p,{children:"Now that we have all the domain code necessary to authenticate users given an username and a password, we can create a route to authenticate users. Within the routes folder, create the file below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// routes/sign_in.dart\nimport 'dart:io';\n\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(\n        Response(statusCode: HttpStatus.methodNotAllowed),\n      ),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final body = await context.request.json() as Map<String, dynamic>;\n  final username = body['username'] as String?;\n  final password = body['password'] as String?;\n\n  if (username == null || password == null) {\n    return Response(statusCode: HttpStatus.badRequest);\n  }\n\n  final authenticator = context.read<Authenticator>();\n\n  final user = authenticator.findByUsernameAndPassword(\n    username: username,\n    password: password,\n  );\n\n  if (user == null) {\n    return Response(statusCode: HttpStatus.unauthorized);\n  } else {\n    return Response.json(\n      body: { 'token': username },\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Install and use the ",(0,a.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog",children:"Dart Frog VS Code extension"})," to easily create new routes within your IDE."]})}),"\n",(0,a.jsx)(n.p,{children:"To people familiar with Dart Frog, the code above should be no real challenge, we are simply handling the\nrequest in the following steps:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Check if we have all the info needed, returning ",(0,a.jsx)(n.code,{children:"badRequest"})," otherwise."]}),"\n",(0,a.jsxs)(n.li,{children:["Get our ",(0,a.jsx)(n.code,{children:"Authenticator"})," dependency from our dependency injection."]}),"\n",(0,a.jsxs)(n.li,{children:["Use the ",(0,a.jsx)(n.code,{children:"Authenticator"})," to get a user that match the request's credential."]}),"\n",(0,a.jsxs)(n.li,{children:["Return an ",(0,a.jsx)(n.code,{children:"unauthorized"})," (401) if there is no user, or return the user username as the authentication token otherwise."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Using the username as an authentication token is quite unsafe. Malicious hackers could easily modify messages with usernames to break through our security and impersonate someone else. For the sake of simplicity, we'll finish off using this simple authentication setup before introducing JWT, a more complex security method."}),"\n",(0,a.jsxs)(n.p,{children:["Try now running a ",(0,a.jsx)(n.code,{children:"curl"})," in the terminal to get a token:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n     -H "Content-Type: application/json" \\\n     -d \'{"username": "john", "password": "123"}\'  \\\n     http://localhost:8080/sign_in\n\n# {"token":"john"}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"requiring-authentication-to-access-routes",children:"Requiring authentication to access routes"}),"\n",(0,a.jsx)(n.p,{children:"Now that we have the means to get an authentication token, we can now protect routes by requiring a token to access them."}),"\n",(0,a.jsx)(n.p,{children:"To start, let's create the following route:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// routes/tasks/index.dart\nimport 'dart:io';\n\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(Response(statusCode: HttpStatus.methodNotAllowed)),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final task = await context.request.body();\n  return Response.json(\n    body: {\n      'recorded_task': task,\n    },\n  );\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This route doesn't do much for now, it just reads the request and answers with a body that includes the\nreceived task name. In addition, it is yet to be protected."}),"\n",(0,a.jsxs)(n.p,{children:["To protect our route, we will use ",(0,a.jsx)(n.a,{href:"https://pub.dev/packages/dart_frog_auth",children:(0,a.jsx)(n.code,{children:"dart_frog_auth"})}),", a\npackage provided by Dart Frog that makes it easier to implement token based authentications."]}),"\n",(0,a.jsx)(n.p,{children:"So let's start by adding it to the project:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dart pub add dart_frog_auth\n"})}),"\n",(0,a.jsxs)(n.p,{children:["First, we need to create a method in our ",(0,a.jsx)(n.code,{children:"Authenticator"})," class which will be responsible of validating\nan authentication token. Since for now, our authentication token is just the username,\nwe can add the following snippet to the ",(0,a.jsx)(n.code,{children:"Authenticator"})," class:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"  User? verifyToken(String username) {\n    return _users[username];\n  }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If the token is valid, the user will be returned, otherwise, the method will return ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Next, lets create the following middleware under ",(0,a.jsx)(n.code,{children:"routes/tasks"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// lib/routes/tasks/_middleware.dart\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:authenticated_app/user.dart';\nimport 'package:dart_frog/dart_frog.dart';\nimport 'package:dart_frog_auth/dart_frog_auth.dart';\n\nHandler middleware(Handler handler) {\n  return handler.use(\n    bearerAuthentication<User>(\n      authenticator: (context, token) async {\n        final authenticator = context.read<Authenticator>();\n        return authenticator.verifyToken(token);\n      },\n    ),\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This middleware is adding a Bearer Token authentication for all requests incoming within the ",(0,a.jsx)(n.code,{children:"tasks"})," namespace."]}),"\n",(0,a.jsxs)(n.p,{children:["The usage of the ",(0,a.jsx)(n.code,{children:"bearerAuthentication"})," middleware, which is provided by ",(0,a.jsx)(n.code,{children:"dart_frog_auth"}),", is quite simple.\nWe need to provide a function that returns a user if the token is valid and belongs to a user; or null otherwise."]}),"\n",(0,a.jsxs)(n.p,{children:["This middleware will automatically return an ",(0,a.jsx)(n.code,{children:"unauthorized"})," (401) response to incoming requests when\nno valid tokens are provided. So, if we go ahead and try the following command in our terminal:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Note the additional `-v`, so we can see the status code in the output\ncurl -d "Buy bread" \\\n     -v \\\n     http://localhost:8080/tasks\n'})}),"\n",(0,a.jsx)(n.p,{children:"We should see the following line in the output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"< HTTP/1.1 401 Unauthorized\n"})}),"\n",(0,a.jsx)(n.p,{children:"But if we inform a valid and correct authentication token:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -d "Buy bread" \\\n     -v \\\n     -H "Authorization: Bearer john" \\\n     http://localhost:8080/tasks\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then the correct response of that route should be the output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{"recorded_task":"Buy bread"}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Additionally, the ",(0,a.jsx)(n.code,{children:"bearerAuthentication"})," middleware will provide the returned user in the request context,\nso any route handlers affected by it, will already have access to the user that is currently authenticated."]}),"\n",(0,a.jsx)(n.p,{children:"With that information, we can change our tasks routes to have a more interesting response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// routes/tasks/index.dart\nimport 'dart:io';\n\nimport 'package:authenticated_app/user.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(Response(statusCode: HttpStatus.methodNotAllowed)),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final task = await context.request.body();\n  final user = context.read<User>();\n\n  return Response.json(\n    body: {\n      'recorded_task': task,\n      'user_id': user.id,\n    },\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"protecting-the-authentication-token",children:"Protecting the authentication token"}),"\n",(0,a.jsx)(n.p,{children:"This is a good point to review what we have done so far:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"We have created a sign in route, where credentials can be posted, and an authentication token\nis returned if valid."}),"\n",(0,a.jsx)(n.li,{children:"We have routes that can only be accessed if an authentication token is sent in the request."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"However, as we noticed in the steps before, our authentication token is quite unsafe, it is nothing\nmore than the username. Meaning that if a malicious hacker guesses another\nusername, which is not something hard to do. This would allow the hacker to impersonate the user and perform bad actions, such as stealing information."}),"\n",(0,a.jsxs)(n.p,{children:["To avoid that, we have to make our tokens in a way where they cannot be faked, guessed or tampered.\nThere are many methods of doing so, in this tutorial, we will use JWT, a widely used standard in the\nindustry to secure issued tokens. This tutorial will not go much in deep on how JWT tokens work\nunder the hood, so to get a better understanding on how they work, be sure to check their official\n",(0,a.jsx)(n.a,{href:"https://jwt.io/",children:"documentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Right, given this brief introduction, let's get to it! Luckily, the Dart ecosystem already has\na handy package that makes it easy to work with JWT tokens. We can start by adding that dependency to our\nproject:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"dart pub add dart_jsonwebtoken\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, add the following method to our ",(0,a.jsx)(n.code,{children:"Authenticator"})," class:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"  String generateToken({\n    required String username,\n    required User user,\n  }) {\n    final jwt = JWT(\n      {\n        'id': user.id,\n        'name': user.name,\n        'username': username,\n      },\n    );\n\n    return jwt.sign(SecretKey('123'));\n  }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This new method takes care of generating a JWT token. Note that we ",(0,a.jsx)(n.code,{children:"sign"})," out the token by\npassing a secret key, as the name implies, this key is secret and should be kept as such. For the scope of this\ntutorial we are keeping it hard coded. Nonetheless, in a real case application,\nbe sure to correctly store it and pass it to the code in a way where then will remain secret to outsiders."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Environments variables are a great way of injecting secrets into you Dart Frog application. Check ",(0,a.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/basics/environments",children:"this guide"})," to learn more about them."]})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"sign"})," method will create a signature out of the data we passed to it, and it will be part\nof the token. This technique will allow us to check if an authentication token that we've received\nis valid and if it hasn't been tampered!"]}),"\n",(0,a.jsxs)(n.p,{children:["Alright, now we need to update our ",(0,a.jsx)(n.code,{children:"/sign_in"})," route. It should no longer return the user's username, but instead, the token created by the ",(0,a.jsx)(n.code,{children:"generateToken"})," method. The route should now look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// routes/tasks/sign_in.dart\nimport 'dart:io';\n\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(\n        Response(statusCode: HttpStatus.methodNotAllowed),\n      ),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final body = await context.request.json() as Map<String, dynamic>;\n  final username = body['username'] as String?;\n  final password = body['password'] as String?;\n\n  if (username == null || password == null) {\n    return Response(statusCode: HttpStatus.badRequest);\n  }\n\n  final authenticator = context.read<Authenticator>();\n\n  final user = authenticator.findByUsernameAndPassword(\n    username: username,\n    password: password,\n  );\n\n  if (user == null) {\n    return Response(statusCode: HttpStatus.unauthorized);\n  } else {\n    return Response.json(\n      body: {\n        'token': authenticator.generateToken(\n          username: username,\n          user: user,\n        ),\n      },\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, we now need to change the ",(0,a.jsx)(n.code,{children:"Authenticator"})," to verify the newly signed token, instead of just\nchecking against a user's username."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"  User? verifyToken(String token) {\n    try {\n      final payload = JWT.verify(\n        token,\n        SecretKey('123'),\n      );\n\n      final payloadData = payload.payload as Map<String, dynamic>;\n\n      final username = payloadData['username'] as String;\n      return _users[username];\n    } catch (e) {\n      return null;\n    }\n  }\n"})}),"\n",(0,a.jsx)(n.p,{children:"And that is it, with the addition of a signed token, if someone tampers the information stored in it,\nor tries to forge a token without knowing the secret key, the authentication will fail; only real authenticated users will be able to access protected routes!"}),"\n",(0,a.jsx)(n.p,{children:"\ud83c\udf89 Congratulations, you've created an application using Dart Frog with authentication."})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);