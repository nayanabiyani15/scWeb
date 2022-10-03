/// <reference types="cypress" />

import { textInput } from "../../fixtures/locator";

describe('Text Input Web Tests', () => {

    beforeEach(() => {
        cy.visit(textInput.url);
    })

    context('Test button name change scenarios', function () {
    
        it('Test button name is changed successfully ', () => {
            let newButtonName = "New button"
            cy.get(textInput.myButton).clear().type(newButtonName)
              .get(textInput.updateButton).click()
              .should('have.text',newButtonName);
        });
    })
})