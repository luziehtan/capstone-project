/// <reference types="Cypress" />

describe('<StartPage/> component', () => {
  it('should render', () => {
    cy.visit('/')
    cy.get('img').should('exist')
    cy.get('a').should('not.be.visible')
  })

  it('should redirect to main page', () => {
    cy.visit('/')
    cy.get('a').click()
  })
})
