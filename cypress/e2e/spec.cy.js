describe('My First Test', () => {
  it('finds the content "education"', () => {
    cy.visit('https://d20ykr3pne3qyk.cloudfront.net/')

    cy.contains('Education').click()

    cy.url().should('include', '/#education')
  })
})