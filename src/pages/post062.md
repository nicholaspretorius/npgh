---
title: "Setup a React app using Create React App with TypeScript"
id: "POST 062"
date: "2020-04-22"
---

To get started with Create React App (CRA) and TypeScript is easy, run: 

* `npx create-react-app my-app --template typescript`

From there, run: `npm start` and visit [http://localhost:3000](http://localhost:3000)

You will notice that CRA defaults the app to running on PORT 3000, which, coincidentally is the port we use to run `sls offline start`. It is up to you which port you are going to change. 

#### Change Port on Create React App

In your "package.json" file, update the "start" script in the "scripts" section to: 

`"start": "PORT=3001 react-scripts start",`

This will instruct CRA to start your app on PORT 3001. Check the app out in your browser to confirm all is working. 

#### Change Port on Serverless Offline

To change the port on the Serverless offline side, you can run the following: 

* `sls offline start --httpPort 3001`

Whichever you choose, choose one and stick to it! 

#### Setting up Cypress

* `npm i -D cypress` to install Cypress
* `npx @bahmutov/cly init` to scaffold Cypress with a single test
* `npm i -D @bahmutov/add-typescript-to-cypress webpack`

Once the above is done, open the file "cypress/integration/spec.ts" and add the following code: 

```
describe("CRA", () => {
  it("shows learn link", () => {
    cy.visit("http://localhost:3001");
    cy.get(".App-header").should("be.visible");
    cy.get(".App-header p").should("be.visible").and("have.text", "Hello world!");
  });
});

export { };
```

Note: The arbitrary "export" at the bottom of the file is to stop the TypeScript compiler to stop shouting about the --isolatedModules rule from .tsconfig. 

While we have turned that rule off within the child .tsconfig file in Cypress, VS Code does not seem to pick up on it. 

Then, in "package.json" add the following to "scripts": 

`"test:e2e": "./node_modules/.bin/cypress open",`

This will open and run Cypress tests. 