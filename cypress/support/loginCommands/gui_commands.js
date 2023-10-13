/// <reference types="cypress" />

import { fakerPT_BR } from '@faker-js/faker';
import Data from '../../fixtures/userdata.json'


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
       .should('have.text', Data.namePage)
 })
 
 Cypress.Commands.add('gui_clickRegisterButton', () => {
    cy.get('input[value=Cadastrar]')
       .should('be.visible')
       .click()
 
 })
 
 Cypress.Commands.add('gui_acessNewUserPage', () => {
    cy.get('li a')
       .should('be.visible')
       .contains(Data.newUser)
       .click()
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