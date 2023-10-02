import { List } from "./List.js";
export class HospitalInventory extends List {
  constructor(hospitalId, config) {
    super(config.sortKey, config.sortDirection);

    this.hospitalId = hospitalId;
  }
}
