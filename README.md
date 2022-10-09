[![scWeb](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/3ymtkd/master&style=for-the-badge&logo=cypress)](https://dashboard.cypress.io/projects/3ymtkd/runs)

## Cypress E2E Tests
1. [Sample App](cypress/e2e/1-Sample-App/sampleApp.cy.js)
1. [Mouse Over](cypress/e2e/2-Mouse-Over/mouseOver.cy.js)
1. [Text Input](cypress/e2e/3-Text-Input/textInput.cy.js)

## Running on local

1. Clone the git repository
    
```
git@github.com:nayanabiyani15/scWeb.git
```
    
2. Install Node.js. It is advised to set up latest node and npm through NVM.

3. Run `npm install` in the project root.

4. Running on browser

```
npm run e2e
```

5. Running commandline

```
npm run prereport

npm run report
```

## Running on pipeline
  Pipeline will be run on every new commit

## Calliope.pro link to the results
  https://app.calliope.pro/profiles/4526

## Improvement to Calliope.pro

The junit report import should not consider below tesuite name with Root Suite as a test case.
    
```
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="0.858" tests="2" failures="0">
<testsuite name="Root Suite" timestamp="2022-10-09T16:27:29" tests="0" file="cypress/e2e/2-Mouse-Over/mouseOver.cy.js" time="0.000" failures="0">
</testsuite>
<testsuite name="MouseOver Web Tests" timestamp="2022-10-09T16:27:29" tests="0" time="0.000" failures="0">
</testsuite>
<testsuite name="Test successful scenarios" timestamp="2022-10-09T16:27:29" tests="1" time="0.516" failures="0">
<testcase name="MouseOver Web Tests Test successful scenarios should increase the count after clicking on click me" time="0.515" classname="should increase the count after clicking on click me">
</testcase>
</testsuite>
<testsuite name="Test negative scenarios" timestamp="2022-10-09T16:27:29" tests="1" time="0.334" failures="0">
<testcase name="MouseOver Web Tests Test negative scenarios should not change the count after clicking on some other elements" time="0.331" classname="should not change the count after clicking on some other elements">
</testcase>
</testsuite>
</testsuites>
```

## Feature Calliopre.pro
Add a tour to the tool when user logs in first time.

## Scenario descriptions
The selected scenarios are most used components of the web. 

## Next steps
Covering remaining components in the test.
