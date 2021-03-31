/// <reference types="Cypress" />

describe('<MovieListPage/> component', () => {
  it('should render', () => {
    cy.visit('/movies')
    cy.get('select').should('exist')
    cy.get(
      'div[data-text="No movies here yet, add your own collection or maybe your Netflix watch list!"]'
    ).should('exist')
    cy.get('button').should('exist')
  })

  it('should redirect to Movie Form Page', () => {
    cy.visit('/movies')
    cy.get('a[data-testid="addmoviebutton"]').click().visit('/addmovie')
  })

  it('deletes movie from list', () => {
    cy.visit('/movies')
    cy.get('button[data-testid="deletebutton"]').click({ multiple: true })
  })

  it('shows movies in selected category', () => {
    cy.visit('/movies')
    cy.get('select').select('American').should('have.value', 'American')
  })
})
