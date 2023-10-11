/// <reference types="cypress" />


describe('Tests for Movements Validations', () => {
    beforeEach(() => {
  
      cy.visit('https://seubarriga.wcaquino.me/login')
  
      cy.gui_validatePage()

      cy.gui_loginSuccessfully()
  
    })
  
    it('Create Revenue Movement', () => {
  
       cy.gui_createMovementButton('Receita', 'Pago', 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
       
       
       cy.gui_createMovementButton('Receita', 'Pago', 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


       cy.gui_createMovementButton('Despesa', 'Pago', 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
      
    
       cy.gui_createMovementButton('Despesa', 'Pago', 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


       cy.gui_createMovementButton('Receita', 'Pendente', 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
      
       
       cy.gui_createMovementButton('Receita', 'Pendente', 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


       cy.gui_createMovementButton('Despesa', 'Pendente', 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
       

       cy.gui_createMovementButton('Despesa', 'Pendente', 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
  
    })
  
  })
  