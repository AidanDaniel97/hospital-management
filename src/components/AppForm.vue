<template>
  <v-form v-if="form" v-model="form.valid" @submit.prevent="submitForm">
    <p v-for="(field, key) in form.fields" :key="key">
    </p>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-for="(field, key) in form.fields"
            :key="key"
            @input="updateFieldValue(field.name, $event)"
            :value="field.value"
            :label="field.displayName"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { Form } from "@/assets/classes/Form";
export default {
  props: {
    formFields: {
      type: Array,
      required: true,
    },
    initialFormData: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },
  data() {
    return {
      form: new Form(this.formFields, this.initialFormData),
    };
  }, 
  methods: {
    updateFieldValue(field, value) {
      this.form.setFieldValue(field, value);
    },
    submitForm() {
      if (this.form.valid) {
        this.$emit("submit", this.form.getFormData());
        this.form.clearFormData();
      }
      // TODO: Handle invalid form
    },
  },
  watch: {
    form: {
      handler(val) {
        this.$emit("input", val);
      },
      deep: true,
    },
  },
};
</script>