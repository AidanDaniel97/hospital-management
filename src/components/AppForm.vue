<template>
  <v-form v-model="form.valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-for="(value, key) in form.fields"
            v-model="field"
            :label="value.displayName"
            required
            :key="key"
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
  },
  data() {
    return {
      form: null,
    };
  },
  mounted() {
    this.form = new Form(this.formFields);
  },
  watch: {
    // form: {
    //   handler(val) {
    //     this.$emit("input", val);
    //   },
    //   deep: true,
    // },
  },
};
</script>