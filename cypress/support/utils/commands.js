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

 Cypress.Commands.add('gui_enterButton', () => {
    cy.get('button')
       .contains('Entrar')
       .click()
 })