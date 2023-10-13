/// <reference types="cypress" />

import Data from '../../fixtures/movementdata.json'

Cypress.Commands.add('gui_createMovementButton', (type, status, account) => {

   cy.get(':nth-child(3) > a')
      .should('have.text', 'Criar Movimentação')
      .click()

   cy.gui_fillMomeventType(type)

   cy.gui_fillMovementDate()

   cy.gui_fillPaymentDate()

   cy.gui_fillDescription(Data.description)

   cy.gui_fillInterested(Data.interested)

   cy.gui_fillValue()

   cy.gui_selectAccount(account)

   cy.gui_fillPaidSituation(status)

   cy.gui_saveMovementButton()
})

Cypress.Commands.add('gui_fillMomeventType', (type) => {

   cy.get('#tipo')
      .select(type)
})

Cypress.Commands.add('gui_fillMovementDate', () => {
   const now = new Date(2021, 3, 14)
   cy.clock(now)

   cy.get('#data_transacao')
      .should('be.visible')
      .type('15/09/2023')

})

Cypress.Commands.add('gui_fillPaymentDate', () => {

   cy.get('#data_pagamento')
      .should('be.visible')
      .type('20/09/2023')

})

Cypress.Commands.add('gui_fillDescription', (text) => {

   if (text == '' || text == undefined)
      text = 'Texto Padrão'

   cy.get('#descricao')
      .should('be.visible')
      .type(text)

})

Cypress.Commands.add('gui_fillInterested', (text) => {
   if (text == '' || text == undefined)
      text = 'Texto Padrão'

   cy.get('#interessado')
      .should('be.visible')
      .type(text)

})

Cypress.Commands.add('gui_fillValue', () => {

   cy.get('#valor')
      .should('be.visible')
      .type('2000')

})

Cypress.Commands.add('gui_selectAccount', (account) => {
   cy.get('#conta')
      .should('be.visible')
      .select(account)

})

Cypress.Commands.add('gui_fillPaidSituation', (status) => {

   if (status.includes('Pago')) {
      cy.get('#status_pago')
         .should('be.visible')
         .check()
   } else {
      cy.get('#status_pendente')
         .should('be.visible')
         .check()
   }
})

Cypress.Commands.add('gui_saveMovementButton', () => {
   cy.get('.btn')
      .should('be.visible')
      .click()
})




