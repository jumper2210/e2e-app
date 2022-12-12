describe('registation', () => {
  it('should allow people to sign up', () => {
    cy.visit('http://localhost:8888')
    cy.get('#email').type('test@mail.com')
    cy.get('#password').type('password')
    cy.get('#repeat-password').type('password')
    cy.get("input[type='submit']").click()
    cy.get('#welcome-screen')
      .contains('Rejestracja zakończona!')
      .should('be.visible')
  })
})
