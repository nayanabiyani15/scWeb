/// <reference types="cypress" />

import { sampleApp } from "../../fixtures/locator";


Cypress.Commands.add("login", (userName, password) => {
    cy.get(sampleApp.userName).clear().type(userName)
        .get(sampleApp.password).clear().type(password).clickLogin();
    
});

Cypress.Commands.add("clickLogin", () => {
    cy.contains(sampleApp.login).click();
});

Cypress.Commands.add("logout", () => {
    cy.contains(sampleApp.logout).click();
});