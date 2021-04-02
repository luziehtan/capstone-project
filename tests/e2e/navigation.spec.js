/// <reference types="Cypress" />

describe('<Navigation/> component', () => {
  it('should not be visible on start page', () => {
    cy.visit('/')
    cy.get('nav').should('not.exist')
  })

  it('should render on all other pages', () => {
    cy.visit('/play')
    cy.get('nav').should('exist')
    cy.visit('/suggestions')
    cy.get('nav').should('exist')
    cy.visit('/addmovie')
    cy.get('nav').should('exist')
    cy.visit('/movies')
    cy.get('nav').should('exist')
  })

  it('should be active when on main page', () => {
    cy.visit('/play')
    cy.get('a').should('have.class', 'active')
  })
})
