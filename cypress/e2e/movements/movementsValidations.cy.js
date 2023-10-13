/// <reference types="cypress" />

import Data from '../../fixtures/movementdata.json'
import DataAccount from '../../fixtures/accountsdata.json'

describe('Tests for Movements Validations', () => {
  beforeEach(() => {

    cy.visit('https://seubarriga.wcaquino.me/login')

    cy.gui_validatePage()

    cy.gui_loginSuccessfully()

  })

  it('Create Revenue Movement', () => {


    cy.gui_createMovementComplete(Data.typeReceita, Data.statusPaid, DataAccount.conta1, 2)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeReceita, Data.statusPaid, DataAccount.conta2, 5)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeDespesa, Data.statusPaid, DataAccount.conta1, 7)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeDespesa, Data.statusPaid, DataAccount.conta2, 40)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeReceita, Data.statusPending, DataAccount.conta2)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeReceita, Data.statusPending, DataAccount.conta1)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeDespesa, Data.statusPending, DataAccount.conta2)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })


    cy.gui_createMovementComplete(Data.typeDespesa, Data.statusPending, DataAccount.conta1)

    cy.gui_validateAlertSuccess({ message: 'Movimentação adicionada com sucesso!' })

  })

  it('Validate Invalid Date Field', () => {
    
    cy.gui_createMovementDateIvalid(Data.typeReceita, Data.statusPaid, DataAccount.conta1)
    
    cy.gui_dangerListMessage()
  })

  it('Validate Invalid Value Field', () => {
    
    cy.gui_createMovementValueIvalid(Data.typeReceita, Data.statusPaid, DataAccount.conta1, 3)
    
    cy.get('.alert > ul > :nth-child(1)')
    .should('have.text', 'Valor deve ser um número')

  })

})
