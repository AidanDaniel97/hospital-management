import { Inventory } from "@/assets/classes/Inventory.js";

describe("Inventory management", () => {
  it("Adds an item to the inventory with a random id", () => {
    const inventory = new Inventory();
    inventory.addItem({
      name: "Item one",
      quantity: 10,
    });

    // Inventory should to contain 1 item with an ID property
    expect(inventory.items.length).toBe(1);
    expect(inventory.items[0].id).toBeDefined();

    // Items list should show the item added with the correct name and quantity
    expect(inventory.items).toContainEqual(
      expect.objectContaining({
        name: "Item one",
        quantity: 10,
      })
    );
  });

  it("Adds an item to the inventory with a specific id", () => {
    const inventory = new Inventory();
    inventory.addItem({
      id: "123",
      name: "apple",
      quantity: 1,
    });

    // Inventory should to contain 1 item with an ID property
    expect(inventory.items.length).toBe(1);
    expect(inventory.items[0].id).toBeDefined();

    // Check the item is exactly as expected
    expect(inventory.items).toContainEqual(
      expect.objectContaining({
        id: "123",
        name: "apple",
        quantity: 1,
      })
    );
  });
});

it("Removes an item from the inventory", () => {
  const inventory = new Inventory();
  const addedItem = inventory.addItem({
    name: "Remove me",
    quantity: 10,
  });

  expect(inventory.items.length).toBe(1);
  inventory.removeItem(addedItem.id);
  expect(inventory.items.length).toBe(0);
});


it("Edits an existing item in the inventory", () => {
    const inventory = new Inventory();
    const addedItem = inventory.addItem({
      name: "Edit me",
      quantity: 10,
    });
 
    inventory.editItem(addedItem.id, {
      name: "Edited",
      quantity: 1,
    }); 

    expect(inventory.items).toContainEqual(
      expect.objectContaining({
        name: "Edited",
        quantity: 1,
      })
    );
});