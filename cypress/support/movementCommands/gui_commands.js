/// <reference types="cypress" />
import Utils from '../utils/utils.js';

import Data from '../../fixtures/movementdata.json'


Cypress.Commands.add('gui_clickMovementButton', () => {
   cy.get(':nth-child(3) > a')
      .should('have.text', 'Criar Movimentação')
      .click()
})

Cypress.Commands.add('gui_createMovementComplete', (type, status, account, subtractDaysMovement, datePayment) => {

   cy.gui_clickMovementButton()

   cy.gui_fillMovementType(type)

   cy.gui_fillMovementDate(subtractDaysMovement)

   cy.gui_fillPaymentDate(datePayment)

   cy.gui_fillDescription(Data.description)

   cy.gui_fillInterested(Data.interested)

   cy.gui_fillValue()

   cy.gui_selectAccount(account)

   cy.gui_fillPaidSituation(status)

   cy.gui_saveMovementButton()
})

Cypress.Commands.add('gui_fillMovementType', (type) => {

   cy.get('#tipo')
      .select(type)
})

Cypress.Commands.add('gui_fillMovementDate', async (subtractDays) => {

   let newDate = await Utils.CriarData(subtractDays)

   cy.get('#data_transacao')
      .should('be.visible')
      .type(newDate)

})

Cypress.Commands.add('gui_fillPaymentDate', async () => {

   let newDate = await Utils.CriarData()

   cy.get('#data_pagamento')
      .should('be.visible')
      .type(newDate)

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

Cypress.Commands.add('gui_fillValue', (value) => {

   if (value == '' || value == undefined)
      value = '2000'

   cy.get('#valor')
      .should('be.visible')
      .type(value)
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

Cypress.Commands.add('gui_createMovementDateIvalid', (type, status, account) => {

   cy.gui_clickMovementButton()

   cy.gui_fillMovementType(type)

   cy.gui_fillInvalidMovementDate()

   cy.gui_fillInvalidPaymentDate()

   cy.gui_fillDescription(Data.description)

   cy.gui_fillInterested(Data.interested)

   cy.gui_fillValue()

   cy.gui_selectAccount(account)

   cy.gui_fillPaidSituation(status)

   cy.gui_saveMovementButton()
})

Cypress.Commands.add('gui_fillInvalidMovementDate', () => {
   cy.get('#data_transacao')
      .should('be.visible')
      .type('TestesMovimentação')
})

Cypress.Commands.add('gui_fillInvalidPaymentDate', () => {
   cy.get('#data_pagamento')
      .should('be.visible')
      .type('TestesPagamento')
})

Cypress.Commands.add('gui_dangerListMessage', () => {

   cy.get('.alert > ul > :nth-child(1)')
      .should('have.text', 'Data da Movimentação inválida (DD/MM/YYYY)')

   cy.get('.alert > ul > :nth-child(2)')
      .should('have.text', 'Data da Movimentação deve ser menor ou igual à data atual')

   cy.get('.alert > ul > :nth-child(3)')
      .should('have.text', 'Data do pagamento inválida (DD/MM/YYYY)')
})

Cypress.Commands.add('gui_createMovementValueIvalid', (type, status, account, subtractDaysMovement) => {

   cy.gui_clickMovementButton()

   cy.gui_fillMovementType(type)

   cy.gui_fillMovementDate(subtractDaysMovement)

   cy.gui_fillPaymentDate()

   cy.gui_fillDescription(Data.description)

   cy.gui_fillInterested(Data.interested)

   cy.gui_fillInvalidValue()

   cy.gui_selectAccount(account)

   cy.gui_fillPaidSituation(status)

   cy.gui_saveMovementButton()
})

Cypress.Commands.add('gui_fillInvalidValue', () => {
   cy.get('#valor')
      .should('be.visible')
      .type('TesteValorIncorreto')
})
