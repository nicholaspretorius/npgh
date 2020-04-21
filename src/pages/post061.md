---
title: "Setup a Serverless Framework API Project with TypeScript"
id: "POST 061"
date: "2020-04-21"
---

Install Serverless framework globally: 

* `npm i -g serverless`

Create a directory for your project: 

* `mkdir sls-project-ts && cd sls-project-ts`
* `mkdir api && mkdir client
* `cd api`

Create your serverless project. `sls` is the shorthand for `serverless`: 

* `sls create --template aws-nodejs-typescript`

This will give you the following: 

```
Serverless: Generating boilerplate...
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v1.67.3
 -------'

Serverless: Successfully generated boilerplate for template: "aws-nodejs-typescript"
Serverless: NOTE: Please update the "service" property in serverless.yml with your service name
```

Update the "service" property in serverless.yml with the service name: 

In the file `api/serverless.yml`, update the service: name property as follows:

```
service:
    name: branch-api`
```

Inside of "api" `mkdir src`. This will store our API endpoint handlers and related "api" code. This keeps the root free to store project config and CI/CD files. 

Move your handler.hello file to the src folder. From "api" run `mv handler.ts src/handler.ts`

Rename the `handler.ts` file to `ping.ts` and change the function name from "hello" to "main": 

```
export const main: APIGatewayProxyHandler = async (event, _context) => {
    ...
}
```

Then update the reference in "api/serverless.yml", find the line in functions: hello and change it to: 

```
functions:
  ping:
    handler: src/ping.main
    events:
      - http:
          method: get
          path: ping
```

Essentially, what this is telling you is that there is a function with the name of "ping", which will be a GET HTTP request on the path /ping. The handler or function for this route will be found in "src/ping.ts" with the "main" function. 


Add: `vscode/` to the .gitignore file in the the root of the project. 

In the project root, run `npm install` to install the dependencies. 

Now you can invoke the function locally via: 

* `serverless invoke local -f ping`

You should now see something like: 

```
Serverless: Bundling with Webpack...
Time: 469ms
Built at: 04/21/2020 14:18:08
      Asset      Size    Chunks             Chunk Names
src/ping.js  6.15 KiB  src/ping  [emitted]  src/ping
Entrypoint src/ping = src/ping.js
[./src/ping.ts] 250 bytes {src/ping} [built]
[source-map-support/register] external "source-map-support/register" 42 bytes {src/ping} [built]
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Hello world!\",\n  \"input\": \"\"\n}"
}
```

Now, in future, as the API becomes more complicated, we may want to run the entire API locally, and not have to manually invoke each function individually. In order to do so, we can install the "[serverless-offline](https://github.com/dherault/serverless-offline)" plugin. 

* `npm install serverless-offline --save-dev`

Then add the plugin to your "serverless.yml" file: 

```
plugins:
  - serverless-webpack
  - serverless-offline
```

You can check that it is present via: `serverless --verbose` (or `sls -v` for shortened output). You should find something like the following in the output: 

```
ServerlessOffline
  offline ....................... Simulates API Gateway to call your lambda functions offline.
  offline start ................. Simulates API Gateway to call your lambda functions offline using backward compatible initialization.
```

To see the API running in offline mode, run: `sls offline start`. (Ctrl + c to quit)

You should see output similar to: 

```
Serverless: Bundling with Webpack...
Time: 532ms
Built at: 04/21/2020 14:32:03
      Asset      Size    Chunks             Chunk Names
src/ping.js  6.15 KiB  src/ping  [emitted]  src/ping
Entrypoint src/ping = src/ping.js
[./src/ping.ts] 250 bytes {src/ping} [built]
[source-map-support/register] external "source-map-support/register" 42 bytes {src/ping} [built]
Serverless: Watching for changes...
offline: Starting Offline: dev/us-east-1.
offline: Offline [http for lambda] listening on http://localhost:3002

   ┌────────────────────────────────────────────────────────────────────────┐
   │                                                                        │
   │   GET | http://localhost:3000/dev/ping                                 │
   │   POST | http://localhost:3000/2015-03-31/functions/ping/invocations   │
   │                                                                        │
   └────────────────────────────────────────────────────────────────────────┘

offline: [HTTP] server ready: http://localhost:3000 🚀
offline: 
offline: Enter "rp" to replay the last request
```

Take special note of the offline endpoint at [http://localhost:3000](http://localhost:3000)

You can check your /ping endpoint via: `curl http://localhost:3000/dev/ping`

You should see something like: 

```
{
  "message": "Hello world!",
  "input": {
    ...
  }
}
```

Since your may run your client on port 3000, you may want to specify the port with `sls offline start --httpPort 4000` which will run the API on port 4000 instead. 


### Linting

We want to ensure that our code is clean and well formatted, we can do this using ES Lint. For preparation we will install the following dependencies: 

`npm iinstall --save-dev eslint eslint-config-airbnb-base typescript-eslint eslint-plugin-import eslint-import-resolver-alias eslint-plugin-module-resolver @typescript-eslint/eslint-plugin @typescript-eslint/parser`

You then create an `eslintrc.json` file: 

```
{
  "extends": [
    "airbnb-base",
    "plugin:jest/all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "jest",
    "@typescript-eslint"
  ],
  "root": true,
  "globals": {},
  "rules": {
    "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
    "import/prefer-default-export": "off",
    "max-len": ["error", {
      "code":  150,
      "ignoreComments":  true,
      "ignoreTrailingComments":  true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }]
  },
  "parser": "@typescript-eslint/parser",
  "env": {},
  "overrides": [],
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@src", "./src"],
          ["@tests", "./tests"],
          ["@queries", "./queries"]
        ],
        "extensions": [
          ".ts",
          ".js"
        ]
      }
    }
  }
}
```

We will then update the `.tsconfig` file as follows: 

```
{
  "compilerOptions": {
    "lib": ["es2017"],
    "removeComments": true,
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "sourceMap": true,
    "target": "es2017",
    "outDir": "lib",
    "inlineSources": true,
    "esModuleInterop": true,
    "sourceRoot": "/",
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"],
      "@queries/*": ["queries/*"],
      "@tests/*": ["tests/*"]
    }
  },
  "include": ["./**/*.ts"],
  "exclude": [
    "node_modules/**/*",
    ".serverless/**/*",
    ".webpack/**/*",
    "_warmup/**/*",
    ".vscode/**/*"
  ]
}
```

### Testing

In order to run tests, we will use Jest and install the following dependencies so that we can.

