/// <reference types="cypress" />

import { sampleApp } from "../../fixtures/locator";

describe('Sample App Testing', () => {

  beforeEach(() => {
    cy.visit(sampleApp.url);
  })

  context('Test successful scenarios', function () {
      let userName = "Test App";
      let welcomeText = "Welcome, " + userName + "!";
      let password = "pwd";
      let logoutText = "User logged out."

    it('Test for successful login of the sample app', () => {
      cy.login(userName,password)
        .get(sampleApp.loginstatus)
        .should('be.visible').should('have.text', welcomeText);
    });

    it('Test for successful logout from the sample app', () => {
      cy.login(userName,password)
        .get(sampleApp.loginstatus)
        .should('be.visible').should('have.text', welcomeText)
        .logout()
        .get(sampleApp.loginstatus)
        .should('be.visible').should('have.text', logoutText)
    });
  });
  
  context('Test unsuccessful login scenarios', function () {
      let statusText = "Invalid username/password";

    it('Test for invalid input login to the sample app', () => {
        cy.clickLogin()
          .get(sampleApp.loginstatus)
          .should('be.visible').should('have.text', statusText)
    });
  })
})