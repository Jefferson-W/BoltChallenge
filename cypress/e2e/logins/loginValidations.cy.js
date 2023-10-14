/// <reference types="cypress" />


describe('Tests for Logins Validations', () => {
  beforeEach(() => {

    cy.visit('https://seubarriga.wcaquino.me/login')

    cy.gui_validatePage()

  })

  it('Create User Successfully', () => {

    cy.gui_acessNewUserPage()

    cy.gui_createNewUserSuccessfully()

    cy.gui_validateAlertSuccess()

  })

  it('Validate Unregistered User', () => {

    cy.gui_loginInvalidUser()

  })

  it('Login successfully', () => {
    
    cy.gui_loginSuccessfully()
  })

  it('Logout successfully', () => {
    
    cy.gui_loginSuccessfully()

    cy.gui_logout()
  })
})
