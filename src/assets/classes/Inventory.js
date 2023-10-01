import { InventoryItem } from "./InventoryItem.js";
import Vue from 'vue';

export class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(itemData) {
    const inventoryItem = new InventoryItem(itemData);
    // Create a new entry with a unique ID
    const entryId = Date.now().toString(36);
    this.items.push({
      id: entryId,
      ...inventoryItem,
    });
  }

  removeItem(itemId) {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  editItem(itemId, itemData) {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
        Vue.set(this.items, index, {
          ...this.items[index],
          ...itemData,
        });
    }
  }
}
