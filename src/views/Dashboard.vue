<template>
  <div class="dashboard">
    <h1>dashboard</h1>
    {{ hospital }}

    {{ inventoryItemFormData }}

    <!-- <button @click="addInventoryItem()">Add inventory item test</button> -->

    <AppModal title="Add inventory item">
      <template v-slot:activator="{ openModal }">
        <v-btn text="Open Dialog" @click="openModal">Add inventory item</v-btn>
      </template>

      <template v-slot:content>
        <AppForm
          :formFields="hospital.config.tables.HospitalInventory"
          v-model="inventoryItemFormData"
        />
      </template>

      <template v-slot:actions="{ closeModal }">
        <v-btn @click="addInventoryItem(closeModal)">Add item</v-btn>
      </template>
      <template v-slot:deactivator="{ closeModal }">
        <v-btn @click="closeModal">Cancel</v-btn>
      </template>
    </AppModal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AppModal from "@/components/AppModal.vue";
import AppForm from "@/components/AppForm.vue";

export default {
  name: "dashboard-page",
  components: {
    AppModal,
    AppForm,
  },
  data() {
    return {
      inventoryItemFormData: null,
    };
  },
  computed: {
    ...mapGetters({
      hospital: "hospital/getHospital",
    }),
  },
  methods: {
    addInventoryItem(callback) {
      this.hospital.inventory.addItem({
        name: "test",
        quantity: 1,
        price: 1,
        hospitalId: this.hospital.id,
      });
      callback();
    },
    removeInventoryItem() {
      this.hospital.inventory;
    },
  },
};
</script>
