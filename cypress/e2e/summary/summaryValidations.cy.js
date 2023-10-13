/// <reference types="cypress" />


describe('Tests for Summary Validations', () => {
    beforeEach(() => {

        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.gui_validatePage()

        cy.gui_loginSuccessfully()

    })

    it('Filter Created Movements', () => {

        cy.gui_clickExtractButton()
        
        cy.gui_selectMonth()

        cy.gui_searchButton()
    })

    it('Delete Movements', () => {

        cy.gui_clickExtractButton()

        cy.gui_selectMonth()

        cy.gui_searchButton()

        cy.gui_deleteButton()
    })
})