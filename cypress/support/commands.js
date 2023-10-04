Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");

  // Fill in the login details
  cy.get('input[data-cy="username"]').type(username);
  cy.get('input[data-cy="password"]').type(password);

  // Submit the login form
  cy.get('button[data-cy="submit-login-form"]').click();
});
