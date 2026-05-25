describe("Modulo de Cadastro - BugBank", () => {
  it("Deve realizar o cadastro com sucesso", () => {
    cy.visit('https://bugbank.netlify.app/');
    
    cy.contains("button", "Registrar").click();
    
    cy.get('input[name="email"]').eq(1).type("anapaula19997@gmail.com", { force: true });
    cy.get('input[name="name"]').type("Ana Paula Macena", { force: true });
    cy.get('input[name="password"]').eq(1).type("Ana@1997", { force: true });
    cy.get('input[name="passwordConfirmation"]').type("Ana@1997", { force: true });
    
    cy.get('#toggleAddBalance').click({ force: true });
    cy.contains("button", "Cadastrar").click({ force: true });
    
    cy.get('#modalText').should('be.visible').and('contain', 'foi criada com sucesso');
  });
});
