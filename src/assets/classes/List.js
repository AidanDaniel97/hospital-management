import { ListItem } from "./ListItem.js";
import Vue from "vue";

export class List {
  constructor(sortKey, sortDirection) {
    this.items = [];
    this.sortKey = sortKey;
    this.sortDirection = sortDirection;
  }

  addItem(itemData) {
    const listItem = new ListItem(itemData);
    this.items.push(listItem);
    return listItem;
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

  getItems() {
    return Object.values(this.items);
  }

  getSortedItems() {
    return this.getItems().sort((a, b) => {
      if (a[this.sortKey] < b[this.sortKey]) {
        return this.sortDirection === "asc" ? -1 : 1;
      }
      if (a[this.sortKey] > b[this.sortKey]) {
        return this.sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  }
}
