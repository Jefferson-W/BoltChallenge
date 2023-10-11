/// <reference types="cypress" />

import { fakerPT_BR } from '@faker-js/faker';
import Data from '../fixtures/userdata.json'


Cypress.Commands.add('gui_createNewUserSuccessfully', () => {

   const userName = fakerPT_BR.internet.userName()
   const userEmail = fakerPT_BR.internet.email({ firstName: userName })
   const userPassword = fakerPT_BR.internet.password()


   cy.get('#nome')
      .should('be.visible')
      .type(userName)

   cy.get('#email')
      .should('be.visible')
      .type(userEmail)

   cy.get('#senha')
      .should('be.visible')
      .type(userPassword, { log: false })

   cy.gui_clickRegisterButton()

})

Cypress.Commands.add('gui_validatePage', () => {
   cy.get('.navbar-brand')
      .should('have.text', 'Seu Barriga')
})

Cypress.Commands.add('gui_clickRegisterButton', () => {
   cy.get('input[value=Cadastrar]')
      .should('be.visible')
      .click()

})

Cypress.Commands.add('gui_acessNewUserPage', () => {
   cy.get('li a')
      .should('be.visible')
      .contains('Novo usuário?')
      .click()
})

Cypress.Commands.add('gui_validateAlertSuccess', ({ message = '' } = {}) => {

   if (message == '' || message == null) {
      cy.get('.alert-success')
         .should('be.visible')
   }
   else {
      cy.get('.alert-success')
         .should('have.text', message)
   }

})

Cypress.Commands.add('gui_loginInvalidUser', () => {

   const userEmail = fakerPT_BR.internet.email()
   const userPassword = fakerPT_BR.internet.password()

   cy.get('#email')
      .should('be.visible')
      .type(userEmail)

   cy.get('#senha')
      .should('be.visible')
      .type(userPassword, { log: false })

   cy.gui_enterButton()

   cy.gui_dangerMessage()
})

Cypress.Commands.add('gui_enterButton', () => {
   cy.get('button')
      .contains('Entrar')
      .click()
})

Cypress.Commands.add('gui_dangerMessage', ({ message = '' } = {}) => {

   if (message == '' || message == null) {
      cy.get('.alert-danger')
         .should('be.visible')
   }
   else {
      cy.get('.alert-danger')
         .should('have.text', message)
   }
})

Cypress.Commands.add('gui_loginSuccessfully', () => {

   cy.get('#email')
      .should('be.visible')
      .type(Data.email)

   cy.get('#senha')
      .should('be.visible')
      .type(Cypress.env('senha'), { log: false })

   cy.gui_enterButton()

   cy.gui_validateAlertSuccess()

})

// -------------------------------------------ACCOUNTS ----------------------------------------//

Cypress.Commands.add('gui_addAccount', () => {

   cy.get('.nav.navbar-nav .dropdown')
      .click()

   cy.get('.dropdown-menu li a')
      .contains('Adicionar')
      .click()

   cy.get('#nome')
      .should('be.visible')
      .type('TestesAdicionando3')

   cy.get('button[type=submit]')
      .should('have.text', 'Salvar')
      .click()

})

Cypress.Commands.add('gui_listAccount', () => {

   cy.gui_acessOption()

   cy.get(`#tabelaContas`)
      .should(`be.visible`)

   cy.get('tbody > :nth-child(1) > :nth-child(1)')
      .should(`have.text`, `TestesAdicionando2`)

   cy.get('tbody > :nth-child(2) > :nth-child(1)')
      .should(`have.text`, `TestesAdicionando3`)
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

// =============================== MOVEMENT ===========================//

Cypress.Commands.add('gui_createMovementButton', (type, status, account) => {

   cy.get(':nth-child(3) > a')
      .should('have.text', 'Criar Movimentação')
      .click()

   cy.gui_fillMomeventType(type)

   cy.gui_fillMovementDate()

   cy.gui_fillPaymentDate()

   cy.gui_fillDescription()

   cy.gui_fillInterested()

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

Cypress.Commands.add('gui_fillDescription', () => {

   cy.get('#descricao')
      .should('be.visible')
      .type('Teste movimentação')

})

Cypress.Commands.add('gui_fillInterested', () => {

   cy.get('#interessado')
      .should('be.visible')
      .type('Teste Descrição movimentação')

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




