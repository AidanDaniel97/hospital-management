<template>
  <div class="dashboard">
    <h1>dashboard</h1>

    <div>
      <v-data-table
        :headers="tableHeaders"
        :items="Object.values(hospital.inventory.items)"
        :item-key="itemKey"
      >
      </v-data-table>
    </div>

    <AppModal title="Add inventory item">
      <template v-slot:activator="{ openModal }">
        <v-btn @click="openModal">Add inventory item</v-btn>
      </template>

      <template v-slot:content="{ closeModal }">
        <AppForm
          ref="InventoryForm"
          :formFields="hospital.config.tables.HospitalInventory"
          @submit="addInventoryItem($event, closeModal)"
        />
      </template>

      <template #actions>
        <v-btn @click="submitInventoryForm()">Add item</v-btn>
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
  computed: {
    ...mapGetters({
      hospital: "hospital/getHospital",
    }),
    tableHeaders() {
      return this.hospital.config.tables.HospitalInventory.map((field) => ({
        text: field.displayName,
        value: field.name,
      }));
    },
  },
  methods: {
    submitInventoryForm() {
      this.$refs.InventoryForm.submitForm();
    },
    addInventoryItem(formData, callback) {
      this.hospital.inventory.addItem(formData);
      callback();
    },
    removeInventoryItem() {
      this.hospital.inventory;
    },
  },
};
</script>
