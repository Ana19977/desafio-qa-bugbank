# Desafios de Automação QA

Repositório dedicado aos desafios de automação de testes, abrangendo testes funcionais (Web) e de API.

##  Tecnologias Utilizadas
- **Cypress:** Automação de testes Web (BugBank).
- **Postman:** Automação e validação de APIs (JSONPlaceholder).

##  Estrutura do Projeto
- `/web-tests`: Automação da interface do site BugBank.
  - Testes de login inválido e cadastro de usuário.
  - Foco em robustez (uso de `within` e dados dinâmicos).
- `/api-tests`: Coleção de testes de API com validação de status codes (GET, POST, PUT).

##  Como rodar os testes
### Web (Cypress)
1. Instale as dependências: `npm install`
2. Execute os testes: `npx cypress run`

### API (Postman)
1. Importe o arquivo `Desafio_Final.postman_collection.json` no seu Postman.
2. Execute a collection através do Runner do Postman ou via Newman.

---
*Desenvolvido por Ana Paula Macena*
