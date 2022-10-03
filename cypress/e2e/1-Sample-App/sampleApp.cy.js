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

    it('Should login to the sample app successfully.', () => {
      cy.login(userName,password)
        .get(sampleApp.loginstatus)
        .should('be.visible').should('have.text', welcomeText);
    });

    it('Should logout to the sample app successfully.', () => {
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

    it('Should not login to the sample app using invalid user details.', () => {
        cy.clickLogin()
          .get(sampleApp.loginstatus)
          .should('be.visible').should('have.text', statusText)
    });
  })
})