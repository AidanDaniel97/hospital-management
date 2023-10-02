import { List } from "@/assets/classes/List.js";

describe("Lists", () => {
  it("Adds an item to the list with a random id", () => {
    const list = new List();
    list.addItem({
      name: "Item one",
      quantity: 10,
    });

    // list should to contain 1 item with an ID property
    expect(list.items.length).toBe(1);
    expect(list.items[0].id).toBeDefined();

    // Items list should show the item added with the correct name and quantity
    expect(list.items).toContainEqual(
      expect.objectContaining({
        name: "Item one",
        quantity: 10,
      })
    );
  });

  it("Adds an item to the list with a specific id", () => {
    const list = new List();
    list.addItem({
      id: "123",
      name: "apple",
      quantity: 1,
    });

    // list should to contain 1 item with an ID property
    expect(list.items.length).toBe(1);
    expect(list.items[0].id).toBeDefined();

    // Check the item is exactly as expected
    expect(list.items).toContainEqual(
      expect.objectContaining({
        id: "123",
        name: "apple",
        quantity: 1,
      })
    );
  });
});

it("Removes an item from the list", () => {
  const list = new List();
  const addedItem = list.addItem({
    name: "Remove me",
    quantity: 10,
  });

  expect(list.items.length).toBe(1);
  list.removeItem(addedItem.id);
  expect(list.items.length).toBe(0);
});

it("Edits an existing item in the list", () => {
  const list = new List();
  const addedItem = list.addItem({
    name: "Edit me",
    quantity: 10,
  });

  list.editItem(addedItem.id, {
    name: "Edited",
    quantity: 1,
  });

  expect(list.items).toContainEqual(
    expect.objectContaining({
      name: "Edited",
      quantity: 1,
    })
  );
});

it("Returns all items in the list", () => {
  const list = new List();
  list.addItem({
    name: "Item one",
    quantity: 10,
  });
  list.addItem({
    name: "Item two",
    quantity: 20,
  });

  expect(list.getItems().length).toBe(2);
});

it("Returns all items in the list sorted by a key", () => {
  const list = new List("quantity", "asc");
  const quantities = [2, 45, 23, 78, 53, 12, 3, 2, 4, 5, 0, 9999];

  for (const quantity of quantities) {
    list.addItem({
      name: "Item",
      quantity,
    });
  }

  const sortedItems = list.getSortedItems();

  for (let i = 1; i < sortedItems.length; i++) {
    expect(sortedItems[i].quantity).toBeGreaterThanOrEqual(
      sortedItems[i - 1].quantity
    );
  }
});
