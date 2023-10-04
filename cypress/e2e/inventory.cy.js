import { users } from "../../src/assets/users/users.js";

describe("Inventory Page", () => {
  beforeEach(() => {
    cy.login(users[0].username, users[0].password);
  });

  // List of fields available to this user
  const availableFields =
    users[0].hospital.config.tables.HospitalInventory.columns;

  const addItem = (item) => {
    // click add-inventory-item-btn button
    cy.get('[data-cy="add-inventory-item-btn"]').click();

    // expect the inventory-item-form to be visible
    cy.get('[data-cy="inventory-item-form"]').should("be.visible");

    // Check the correct fields are visible for this user, and enter data
    for (let field of availableFields) {
      cy.get(`[data-cy="form-field-${field.name}"]`).should("be.visible");
      cy.get(`[data-cy="form-field-${field.name}"]`).type(item[field.name]);
    }

    // Now click the submit button
    cy.get('[data-cy="submit-inventory-item-form"]').click();

    // Check the item is now in the list
    for (let field of availableFields) {
      cy.contains("td", item[field.name]).should("be.visible");
    }
  };

  it("should add items to the list", () => {
    // Get a random item from the list of items fixture
    cy.fixture("inventory_items").then((items) => {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      addItem(randomItem);
    });
  });

  it("should remove items from the list", () => {
    // Get a random item from the list of items fixture
    cy.fixture("inventory_items").then((items) => {
      const randomItem = items[Math.floor(Math.random() * items.length)];

      // Add item
      addItem(randomItem);

      // Remove item
      cy.contains("td", randomItem.item_name)
        .parent()
        .find('[data-cy="delete-inventory-item"]')
        .click();

      // Verify item was removed
      for (let field of availableFields) {
        cy.contains("td", randomItem[field.name]).should("not.exist");
      }
    });
  });
});
