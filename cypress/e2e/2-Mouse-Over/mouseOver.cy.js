/// <reference types="cypress" />

import { mouseOver } from "../../fixtures/locator";

describe('MouseOver Web Tests', () => {

    beforeEach(() => {
        cy.visit(mouseOver.url);
    })

    context('Test successful scenarios', function () {
    
        it('should increase the count after clicking on click me', () => {
            cy.clickMe().clickMe()
                .get(mouseOver.clickCount).should('have.text', '2')
        });
    })

    context('Test negative scenarios', function () {

        it('should not change the count after clicking on some other elements', () => {

            cy.get(mouseOver.clickCount) //get count element
                .click()                 //click the count element
                .get(mouseOver.clickCount).should('have.text', '0')
        })
    })

})