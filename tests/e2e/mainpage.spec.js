/// <reference types="Cypress" />

describe('<MainPage/> component', () => {
  it('should render', () => {
    cy.visit('/play')
    cy.get('select[name="mainpageselect"]').should('exist')
    cy.get('a[name="playbutton"]').should('exist')
  })

  it('should choose a food category and go to suggestions page after button click', () => {
    cy.visit('/play')
    cy.get('select[name="mainpageselect"]')
      .select('American')
      .should('have.value', 'American')
    cy.get('a[name="playbutton"]').click()
  })

  it('should redirect with no selected category to suggestions page when clicked', () => {
    cy.visit('/play')
    cy.get('a[name="playbutton"]').click().visit('/suggestions')
  })
})
