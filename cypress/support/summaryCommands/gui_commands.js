/// <reference types="cypress" />

Cypress.Commands.add('gui_clickExtractButton', () => {
    cy.get(`a[href*="/extrato"]`)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('gui_selectMonth', () => {
    cy.get(`#mes`)
        .select('Outubro')
})


Cypress.Commands.add('gui_searchButton', () => {

cy.get('input[value="Buscar"]')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('gui_deleteButton', () => {

    cy.get(':nth-child(1) > :nth-child(6) > a > .glyphicon')
        .should('be.visible')
        .click()
})
