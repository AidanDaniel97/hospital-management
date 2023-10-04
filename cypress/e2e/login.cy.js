import { users } from "../../src/assets/users/users.js";

describe("Login form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in successfully", () => {
    cy.login(users[0].username, users[0].password);

    cy.url().should("contain", "/inventory");
  });

  it("Should display an error message for invalid credentials", () => {
    cy.login("non-existant-user", "password");

    // Check for an error message element on the page
    cy.get('div[data-cy="error-message"]').should(
      "contain",
      "Invalid username or password, please try again."
    );
  });
});
