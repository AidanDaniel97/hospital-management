import { Inventory } from "./Inventory.js";
export class HospitalInventory extends Inventory {
  constructor(hospitalId) {
    super();

    this.hospitalId = hospitalId;
  }
}
