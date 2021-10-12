// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Test whether we are on the right page', () => {
    cy.visit('/')
    cy.contains('span', 'نقد و بررسی شما')
  })
})
