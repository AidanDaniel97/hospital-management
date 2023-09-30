export class HospitalInventory {
  constructor(hospitalId) {
    this.hospitalId = hospitalId;
    this.inventory = [];
  }

  addItem(inventoryItem) {
    // Create a new entry with a unique ID
    const entryId = Date.now().toString(36);
    this.inventory.push({
      id: entryId,
      ...inventoryItem,
    });
  }

  removeItem(itemId) {
    const index = this.inventory.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      this.inventory.splice(index, 1);
    }
  }
}
