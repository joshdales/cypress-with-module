describe('test', () => {
  beforeEach(() => {
    cy.visit('/')});

  it('should display welcome message', () => {
    cy.get('h1').should('contain.text', 'Hello')
  });
});
