export class InventoryItem {
  constructor(
    id,
    productName,
    itemNumber,
    manufacturer,
    category,
    quantity,
    expiryDate,
    price
  ) {
    this.id = id;
    this.productName = productName;
    this.itemNumber = itemNumber;
    this.manufacturer = manufacturer;
    this.category = category;
    this.quantity = quantity;
    this.expiryDate = expiryDate;
    this.price = price;
  }
}
