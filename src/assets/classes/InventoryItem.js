export class InventoryItem {
  constructor(itemData) {
    // loop through item data and set the properties
    // TODO: Specify the properties that can be set
    for (const property in itemData) {
      this[property] = itemData[property];
    }
  }
}
