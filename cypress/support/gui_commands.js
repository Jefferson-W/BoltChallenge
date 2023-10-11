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