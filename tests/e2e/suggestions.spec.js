/// <reference types="Cypress" />

describe('<Suggestions/> component', () => {
  it('should render', () => {
    cy.visit('/suggestions')
    cy.get('p').should(
      'have.text',
      'Your food category: 🎬 not hungry, just bored'
    )
  })

  it('should show randomize again button', () => {
    cy.get('button').should('exist')
  })

  it('should only show movies in American food category and show add more movies button', () => {
    cy.visit('/play')
    cy.get('select[name="mainpageselect"]')
      .select('American')
      .should('have.value', 'American')
    cy.get('a[name="playbutton"]').click()
    cy.get('button').should('exist')
  })

  it('should show random selection in African food category because it is empty and add more movies button', () => {
    cy.visit('/play')
    cy.get('select[name="mainpageselect"]')
      .select('African')
      .should('have.value', 'African')
    cy.get('a[name="playbutton"]').click()
    cy.get('button').should('exist')
  })
})
