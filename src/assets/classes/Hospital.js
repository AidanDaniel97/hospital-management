import { HospitalInventory } from "./HospitalInventory.js";

export class Hospital {
  constructor(id, name, config) {
    this.id = id;
    this.name = name;
    this.config = config;
    this.inventory = new HospitalInventory(id);
  }
}
