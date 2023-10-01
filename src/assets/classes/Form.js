import Vue from "vue";

export class Form {
  constructor(fields, formData = null) {
    this.fields = fields;
    this.errors = {};

    // Add a value field to each field using Vue.set
    this.fields.forEach((field) => {
      Vue.set(field, "value", "");
    });

    if(formData){
      this.setFormFields(formData);
    }
  }

  // Set form data value
  setFieldValue(name, value) {
    const field = this.fields.find((field) => field.name === name);
    if (field) {
      field.value = value;
    }
  }

  // Set multiple form data values at once
  setFormFields(formData) {
    console.log(formData)
    console.log(Object.keys(formData))
    Object.keys(formData).forEach((fieldName) => {
      this.setFieldValue(fieldName, formData[fieldName]);
    });
  }

  // Get field name and value key pair
  getFormData() {
    const formData = {};
    this.fields.forEach((field) => {
      formData[field.name] = field.value;
    });
    return formData;
  }

  // Clear form data
  clearFormData() {
    this.fields.forEach((field) => {
      field.value = "";
    });
  }

  // Set the form errors
  setFormErrors(errors) {
    this.errors = errors;
  }

  // Get the form errors
  getFormErrors() {
    return this.errors;
  }

  // Validate the form
  validateForm() {
    let isValid = true;
    const errors = {};

    // Loop through the fields
    this.fields.forEach((field) => {
      // Check if the field is required
      if (field.validation.required) {
        // Check if the field is empty
        if (!this.form[field.name]) {
          // Set the error
          errors[field.name] = `${field.name} is required`;
          isValid = false;
        }
      }
    });

    // Set the errors
    this.setFormErrors(errors);

    // Return the validity
    return isValid;
  }
}
