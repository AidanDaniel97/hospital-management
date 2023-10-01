export class InventoryItem {
  constructor(itemData) {
    if(itemData.id === undefined){ 
      // Create a new entry with a unique ID
      itemData.id = Date.now().toString(36);
    }

    // loop through item data and set the properties
    // TODO: Specify the properties that can be set
    for (const property in itemData) {
      this[property] = itemData[property];
    }
  }
}
