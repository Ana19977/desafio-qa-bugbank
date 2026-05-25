describe("Modulo de Login - BugBank", () => {
  it("Deve apresentar erro ao tentar logar com credenciais invalidas", () => {
    cy.visit('https://bugbank.netlify.app/');
    
    // Filtra para agir apenas dentro do formulário de login
    cy.get('form').eq(0).within(() => { 
      cy.get('input[name="email"]').type("usuario_inexistente@teste.com");
      cy.get('input[name="password"]').type("senhaerrada123");
      cy.contains("button", "Acessar").click();
    });
    
    cy.contains("Usuário ou senha inválido").should("be.visible");
  });
});