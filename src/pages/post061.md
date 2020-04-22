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

`npm install --save-dev eslint eslint-config-airbnb-base typescript-eslint eslint-plugin-import eslint-plugin-jest eslint-import-resolver-alias eslint-plugin-module-resolver @typescript-eslint/eslint-plugin @typescript-eslint/parser`

You then create an `.eslintrc` file: 

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
    "import/no-unresolved": "off",
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
    "baseUrl": "./"
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

To ensure the linting rules are working, add the following to your "package.json" file: 

In order to run the tests, you need to add the following to your "package.json" file in the root of your project directory: 

```
"scripts": {
  ...
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  ...
 },
```

Then run `npm run lint` from your command line. If there are any issues, fix these as needed.

### Testing

In order to run tests, we will use Jest and install the following dependencies: 

* `npm i -D jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest`

Note: `npm i -D jest ...` is shorthand for `npm install --save-dev jest ...`

Then create a file named babel.config.js to configure Jest to work with Babel: 

```
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
};
```

With this in place, we can setup a directory named "tests" in which to put our testing code. From the root of the project run: 

* `mkdir tests && cd tests`

Create a new file named "sanity.test.ts" via `touch sanity.test.ts` and add the following code. According to TDD principles of "red, green, refactor", we will write a failing test as a sanity test to ensure our testing setup is working: 

```
describe("sanity test", () => {
  it("can run a test", () => {
    expect.hasAssertions();
    expect(true).toBe(true);
  });
});
```

In order to run the tests, you need to add the following to your "package.json" file in the root of your project directory: 

```
"scripts": {
  "test": "NODE_ENV=test ./node_modules/.bin/jest --ci --verbose",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
 },
```

### Writing Tests

Now that we have our testing setup, we need to consider two aspects of testing: 

1. Unit testing
2. Integration testing

#### Unit Testing

Unit testing is an approach where you decompose your code and tests into small units that can be tested individually without relying on dependencies. 

Since we currently only have 1 endpoint which is found through a GET request to /ping, we do not have much to test. 

Furthermore, the endpoint has both the business logic and the handler itself bundled together. As such, we need to split out our logic into a testable unit. Since we have so little code at this stage, it might seem silly to do so, however, we will dig into this topic later. At this point, we are doing this so that we can get a passing test. 

Inside of your tests folder, run `mkdir unit && mkdir integration`. Once those folders are created `cd unit && touch ping.unit.test.ts`. 

First we will refactor our endpoint to give ourselves a function to test: 

```
import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const main: APIGatewayProxyHandler = async () => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: getGreeting(),
    },
  ),
});

export function getGreeting() {
  return "Hello world!"
}
```

In the file "ping.unit.test.ts" add the following code: 

```
import { getGreeting } from "../../src/ping";

describe("unit: /ping", () => {
    it('should return a message of "Hello world!"', () => {
        expect(getGreeting()).toBe("Hello world!");
    });
});
```

Save and run your tests: `npm test`

### Integration Testing

Integration testing involves testing your application more holistically, by combining all the dependencies together to see if you get a result. As such, at this stage, our integration test will test againt the /ping endpoint directly to see that when it is requested, it returns the response we are expecting. 

We will be using "supertest" to do this for us. Install it as a development dependency via: `npm i -D supertest`

From there, change into the "tests/integration" directory and create file named "ping.int.test.ts". In that file, add the following: 

```
import request from "supertest";

describe("integration: GET /ping", () => {
    const server = request("http://localhost:3000/dev");

    test("should return with status of 200", async () => {
        const res = await server.get("/ping");
        expect(res.status).toEqual(200);
    });

    test("should return with a message", async () => {
        const res = await server.get("/ping");
        expect(res.body);
        expect(res.body.message).toEqual("Hello world!");
    });
});
```

Since we do not have the entire Serverless stack available to use to test easily, we are simply using "supertest" to call the localhost server directly. This is not ideal since it involves a lot of overhead, but, at this stage, we will work with what we have. 

* In one terminal window run: `sls offline start`
* In another terminal window run: `npm test`

You should now see an extra test suite for your integration tests appearing and passing two test cases. 

### Serverless Framework Integration Testing

In addition to "supertest", we can also use the Serverless framework's testing capability directly. Create a file in the project root named "serverless.test.yml". 

In this file add the following: 

```
- name: /ping returns response with message
  endpoint: { function: ping }
  response:
    body: { "message": "Hello world!" }
    status: 200
```

Essentially, we are re-creating the test we wrote with "supertest" except that Serverless framework is handling the implementation of the test. 

Note: Furthermore, you could also use Postman to write your integration tests. Personally, my feeling is that you should do at least one of these approaches. Integration tests in code gives you more flexibility in terms of how exactly you compose or select what goes into an "integration" test, whereas the Serverless functionality, or writing in Postman requires less setup, but is only testing the request/response in its entirety. As it stands, we have all of the options available to us. 

## Deployment

Now we are finally ready to deploy our API to AWS. In order to do so, you will run the command: 

* `sls deploy -v` 

Note: v stands for "verbose" 

Alternately, you can just run `sls deploy` which will not print out verbose messages. 

## CI/CD with Travis CI

Now we are finally ready to start putting together our CI/CD pipeline. In short, this will involve 3 steps: 

1. Commit our code to Git. 
2. Push our code to GitHub
3. Travis CI (connected to GitHub) will trigger a build on commit. 
4. Travis CI will build the application: 
5. Travis CI will deploy the application onto AWS: I
    * If all linting and testing passes
    * Else, nothing will happen. 

Note, if you ever want a commit *not* to trigger a Travis CI build, then you need to add the words `[skip ci]` to your commit message. For example: 

* `git commit -m My new feature [skip ci]`


In order to set Travis CI up you first need to: 

1. Create a Travis CI account
2. Link Travis CI to your GitHub repository
3. Create a `.travis.yml` specifying your build process

### 1. Create Travis CI Account

### 2. Link Travis CI to GitHub

### 3. Travis CI

In the root of the project, create a ".travis.yml" file via `touch .travis.yml`

In it, write the following code: 

```
language: node_js
node_js:
  - "12.16.2"

deploy_service_job: &DEPLOY_SERVICE_JOB
  cache:
    directories:
      - node_modules

  install:
    - cd -
    - npm install -g serverless
    - travis_retry npm install
    - cd -

  script:
    - npm install
    - npm run lint
    - sls test
    - npm run test:unit
    # - npm run test:integration
    - serverless deploy -s ${STAGE_NAME}
    - cd -

environments:
  # - &PRODUCTION_ENV
  #   - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID_PRODUCTION}
  #   - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY_PRODUCTION}

  - &DEVELOPMENT_ENV
    - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID_DEVELOPMENT}
    - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY_DEVELOPMENT}

jobs:
  include:
    # master deploys to 'dev', however, in future, master will deploy to 'prod'
    - <<: *DEPLOY_SERVICE_JOB
      name: "Deploy Dev API"
      if: type = push AND NOT branch = master
      env:
        - STAGE_NAME=${TRAVIS_BRANCH}
        - *DEVELOPMENT_ENV
    # TODO: in future master will deploy to 'prod'
    # - <<: *DEPLOY_SERVICE_JOB
    #   name: "Production Deploy API"
    #   if: type = push AND branch = master
    #   env:
    #     - STAGE_NAME=${TRAVIS_BRANCH}
    #     - *PRODUCTION_ENV

```

