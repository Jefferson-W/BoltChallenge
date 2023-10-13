/// <reference types="cypress" />

import Data from '../../fixtures/movementdata.json'

describe('Tests for Movements Validations', () => {
    beforeEach(() => {
  
      cy.visit('https://seubarriga.wcaquino.me/login')
  
      cy.gui_validatePage()

      cy.gui_loginSuccessfully()
  
    })
  
    it('Create Revenue Movement', () => {
  
       cy.gui_createMovementButton(Data.typeReceita, Data.statusPaid, 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
       
       
       cy.gui_createMovementButton(Data.typeReceita, Data.statusPaid, 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


       cy.gui_createMovementButton(Data.typeDespesa, Data.statusPaid, 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
      
    
       cy.gui_createMovementButton(Data.typeDespesa, Data.statusPaid, 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


       cy.gui_createMovementButton(Data.typeReceita, Data.statusPending, 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
      
       
       cy.gui_createMovementButton(Data.typeReceita, Data.statusPending, 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


       cy.gui_createMovementButton(Data.typeDespesa, Data.statusPending, 'ContaJoao')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
       

       cy.gui_createMovementButton(Data.typeDespesa, Data.statusPending, 'ContaCarlos')    
       
       cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })
  
    })
  
  })
  