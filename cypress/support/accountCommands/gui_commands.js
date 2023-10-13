
/// <reference types="cypress" />

import { fakerPT_BR } from '@faker-js/faker';

const accountName = fakerPT_BR.internet.userName()

Cypress.Commands.add('gui_addAccount', () => {

    cy.get('.nav.navbar-nav .dropdown')
        .click()

    cy.get('.dropdown-menu li a')
        .contains('Adicionar')
        .click()

    cy.get('#nome')
        .should('be.visible')
        .type(accountName)

    cy.get('button[type=submit]')
        .should('have.text', 'Salvar')
        .click()
})

Cypress.Commands.add('gui_removeAccount', (name) => {
    if (name == '' || name == undefined)
        name = accountName

    cy.get('#tabelaContas tr td')
        .contains(name)
        .next()
        .children('a[href*="remover"]')
        .click()
})


Cypress.Commands.add('gui_listAccount', () => {

    cy.gui_acessOption()

    cy.get(`#tabelaContas`)
        .should(`be.visible`)
})

Cypress.Commands.add('gui_acessOption', () => {

    cy.get('.nav.navbar-nav .dropdown')
        .click()

    cy.get('.dropdown-menu li a')
        .contains('Listar')
        .click()
})

Cypress.Commands.add('gui_clickUpdateButton', (option) => {

    if (option < 1 || option == undefined)
        option = 1

    cy.get(`#tabelaContas tr:nth-of-type(${option}) a[href*="/editarConta"]`)
        .should('be.visible')
        .click()

})

Cypress.Commands.add('gui_updateNameAccount', (nameAccount) => {

    cy.get('#nome')
        .should('be.visible')
        .clear()
        .type(nameAccount)

    cy.get('button[type=submit]')
        .should('have.text', 'Salvar')
        .click()

    cy.gui_validateAlertSuccess({ message: 'Conta alterada com sucesso!' })
})
