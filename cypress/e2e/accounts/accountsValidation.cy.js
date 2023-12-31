/// <reference types="cypress" />
import Data from '../../fixtures/accountsdata.json'

describe('Tests for Accounts Validations', () => {
    beforeEach(() => {

        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.gui_validatePage()

    })

    it('Add Accounts', () => {
        cy.gui_loginSuccessfully()

        cy.gui_addAccount()

        cy.gui_validateAlertSuccess({ message: 'Conta adicionada com sucesso!' })
        
    })

    it('Existing Account', () => {
        cy.gui_loginSuccessfully()

        cy.gui_addAccount()

        cy.gui_dangerMessage({ message: 'Já existe uma conta com esse nome!' })
    })

    it('Remove Accounts', () => {
        cy.gui_loginSuccessfully()

        cy.gui_listAccount()

        cy.gui_removeAccount()        
    })

    it('List Accounts', () => {
        cy.gui_loginSuccessfully()

        cy.gui_listAccount()
    })

    it('Update Name Accounts', () => {

        cy.gui_loginSuccessfully()

        cy.gui_acessOption()

        cy.gui_clickUpdateButton()

        cy.gui_updateNameAccount(Data.conta1)

        cy.gui_clickUpdateButton(2)

        cy.gui_updateNameAccount(Data.conta2)

    })   

})