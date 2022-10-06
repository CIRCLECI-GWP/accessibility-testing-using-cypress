/// <reference types="cypress" />

describe("Sign Up Accessibility test suite", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });

  it("Check entire page for a11y issues", () => {
    cy.checkA11y();
  });
});
