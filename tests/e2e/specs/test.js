// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url and see a bitcoin card", () => {
    cy.visit("/");
    cy.contains("Bitcoin");
  });
  it("Clicks the bitcoin card and reaches its url.", () => {
    cy.visit("/");
    cy.get("[data-cy=BTC] a").click()
    cy.url().should('eq', 'http://localhost:8081/BTC')
  });
  it("Visits the Etherum page directly.", () => {
    cy.visit("http://localhost:8081/ETH");
    cy.contains("Ethereum");
  });
});
