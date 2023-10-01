<template>
  <div>
    <slot name="activator" :openModal="openModal">
      <v-btn @click="openModal">Open modal</v-btn>
    </slot>

    <v-dialog v-model="isModalOpen" width="500">
      <v-card title="Dialog">
        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-text>
          <slot name="content" :closeModal="closeModal"></slot>
        </v-card-text>
        <v-card-actions>
          <slot name="actions" :closeModal="closeModal"></slot>
          <v-spacer></v-spacer>

          <slot name="deactivator" :closeModal="closeModal">
            <v-btn @click="closeModal">Close modal</v-btn>
          </slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "AppModal",
  props: {
    title: {
      type: String,
      default: "Modal",
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  watch: {
    isModalOpen(val) {
      this.$emit("modalToggled", val)
    },
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
