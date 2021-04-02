/// <reference types="Cypress" />

describe('<MovieFormPage/> component', () => {
  it('should render', () => {
    cy.visit('/addmovie')
    cy.get('form').should('exist')
    cy.get('input').should('exist')
    cy.get('select').should('exist')
    cy.get('button').should('exist')
  })

  it('should add movie on submit after movie name in input and food category selected', () => {
    cy.visit('/addmovie')
    cy.get('input').type('Movie Title').should('have.value', 'Movie Title')
    cy.get('select').select('American').should('have.value', 'American')
    cy.get('button').click().visit('/movies')
  })
})
