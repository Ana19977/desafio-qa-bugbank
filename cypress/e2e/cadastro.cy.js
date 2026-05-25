describe("Modulo de Cadastro - BugBank", () => {
  it("Deve realizar o cadastro com sucesso", () => {
    cy.visit('https://bugbank.netlify.app/');
    
    // Clicar no botão para virar o card
    cy.contains("button", "Registrar").click();
    
    const emailUnico = `ana${Date.now()}@teste.com`;

    // Usamos o force: true aqui porque o card está "virado" pela animação CSS
    cy.get('form').eq(1).within(() => {
      cy.get('input[name="email"]').type(emailUnico, { force: true });
      cy.get('input[name="name"]').type("Ana Paula Macena", { force: true });
      cy.get('input[name="password"]').type("Ana@1997", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("Ana@1997", { force: true });
      cy.get('#toggleAddBalance').click({ force: true });
      cy.contains("button", "Cadastrar").click({ force: true });
    });
    
    cy.get('#modalText', { timeout: 10000 }).should('be.visible');
  });
});