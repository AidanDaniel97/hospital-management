export class Form {
  constructor(fields) {
    this.fields = fields;
    this.errors = {};
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
