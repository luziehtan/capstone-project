/// <reference types="Cypress" />

describe('<MainPage/> component', () => {
  it('should render', () => {
    cy.visit('/')
    cy.get('select[name="mainpageselect"]').should('exist')
    cy.get('a[name="playbutton"]').should('exist')
  })

  it('should choose a food category', () => {
    cy.visit('/')
    cy.get('select[name="mainpageselect"]')
      .select('American')
      .should('have.value', 'American')
  })

  it('should redirect to suggestion page when clicked', () => {
    cy.visit('/')
    cy.get('a[name="playbutton"]').click().visit('/suggestions')
  })
})
