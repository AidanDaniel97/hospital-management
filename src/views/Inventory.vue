<template>
  <div class="inventory">
    <h1 class="py-5">Inventory</h1>

    <v-card>
      <v-card-text>
        <v-data-table
          data-cy="inventory-item-table"
          :search="searchTerm"
          :headers="tableHeaders"
          :items="tableItems"
        >
          <!-- Search -->
          <template v-slot:top>
            <v-text-field
              v-model="searchTerm"
              label="Search"
              class="pa-4"
            ></v-text-field>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="setEditingInventoryItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              data-cy="delete-inventory-item"
              size="small"
              @click="removeInventoryItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card-text>

      <v-card-actions>
        <v-btn color="indigo" dark @click="addMultipleItems()"
          >Add multiple entries item</v-btn
        >
        <v-spacer></v-spacer>
        <AppModal
          @modalToggled="isModalOpen = $event"
          ref="inventoryFormModal"
          :title="`${editingInventoryItem ? 'Edit' : 'Add'} inventory item`"
        >
          <template v-slot:activator="{ openModal }">
            <v-btn
              data-cy="add-inventory-item-btn"
              color="indigo"
              dark
              @click="openModal"
              >Add inventory item</v-btn
            >
          </template>

          <template v-slot:content="{ closeModal }">
            <AppForm
              data-cy="inventory-item-form"
              v-if="isModalOpen"
              ref="InventoryForm"
              :formFields="inventoryFormFields"
              :initialFormData="editingInventoryItem"
              @submit="handleInventoryFormSubmit($event, closeModal)"
            />
          </template>

          <template #actions>
            <v-btn
              data-cy="submit-inventory-item-form"
              color="indigo"
              dark
              @click="submitInventoryForm()"
              >{{
                `${editingInventoryItem ? "Save changes" : "Add item"}`
              }}</v-btn
            >
          </template>
          <template v-slot:deactivator="{ closeModal }">
            <v-btn color="gray" dark @click="handleCloseModal(closeModal)"
              >Cancel</v-btn
            >
          </template>
        </AppModal>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AppModal from "@/components/AppModal.vue";
import AppForm from "@/components/AppForm.vue";

export default {
  name: "inventory-page",
  components: {
    AppModal,
    AppForm,
  },
  data() {
    return {
      editingInventoryItem: null,
      isModalOpen: false,
      searchTerm: "",
    };
  },
  computed: {
    ...mapGetters({
      hospital: "hospital/getHospital",
    }),
    inventoryFormFields() {
      return this.hospital.config.tables.HospitalInventory.columns;
    },
    tableHeaders() {
      let headers = this.inventoryFormFields.map((field) => ({
        text: field.displayName,
        value: field.name,
      }));

      headers.push({
        text: "Actions",
        value: "actions",
        sortable: false,
      });

      return headers;
    },
    tableItems() {
      return this.hospital.inventory.getSortedItems();
    },
  },
  methods: {
    addMultipleItems() {
      for (let i = 0; i < 50; i++) {
        let randomData = {
          item_name: "Item name",
          item_number: Math.floor(Math.random() * 1000),
          item_manufacturer: ["Man 1", "Man2", "Man 3"][
            Math.floor(Math.random() * 3)
          ],
          item_category: ["Cat 1", "Cat2", "Cat 3"][
            Math.floor(Math.random() * 3)
          ],
          item_quantity: Math.floor(Math.random() * 1000),
        };
        this.hospital.inventory.addItem(randomData);
      }
    },
    handleCloseModal(closeModal) {
      if (this.editingInventoryItem) {
        this.editingInventoryItem = null;
      }
      closeModal();
    },
    handleInventoryFormSubmit(formData, callback) {
      if (this.editingInventoryItem) {
        this.editInventoryItem(formData, callback);
      } else {
        this.addInventoryItem(formData, callback);
      }
    },
    submitInventoryForm() {
      this.$refs.InventoryForm.submitForm();
    },
    addInventoryItem(formData, callback) {
      this.hospital.inventory.addItem(formData);
      callback();
    },
    editInventoryItem(formData, callback) {
      this.hospital.inventory.editItem(this.editingInventoryItem.id, formData);
      this.editingInventoryItem = null;
      callback();
    },
    removeInventoryItem(item) {
      this.hospital.inventory.removeItem(item.id);
    },
    setEditingInventoryItem(item = null) {
      this.editingInventoryItem = item;
      this.$refs.inventoryFormModal.openModal();
    },
  },
};
</script>
