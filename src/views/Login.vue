<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-card-title class="indigo white--text">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                data-cy="username"
                label="Username"
                v-model="form.username"
                :error="formHasError"
                required
              ></v-text-field>
              <v-text-field
                data-cy="password"
                label="Password"
                v-model="form.password"
                :error="formHasError"
                :type="showPassword ? 'text' : 'password'"
                required
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-btn
                data-cy="submit-login-form"
                color="indigo"
                dark
                block
                type="submit"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>

          <v-alert
            v-if="formHasError"
            data-cy="error-message"
            variant="outlined"
            type="warning"
            class="mt-2"
          >
            {{ form.error }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      showPassword: false,
      form: {
        username: "",
        password: "",
        error: "",
      },
    };
  },
  methods: {
    login() {
      if (this.form.username && this.form.password) {
        try {
          this.$store.dispatch("auth/login", {
            username: this.form.username,
            password: this.form.password,
          });

          this.$router.push("/inventory"); // Redirect to the dashboard after successful login
        } catch (error) {
          this.form.error = error.message;
        }
      } else {
        // Handle error when username or password is empty
        this.form.error = "Username and password are required";
      }
    },
  },
  watch: {
    // Watch for changes on the inputs to clear error
    username() {
      this.form.error = "";
    },
    password() {
      this.form.error = "";
    },
  },
  computed: {
    formHasError() {
      return !!this.form.error;
    },
  },
};
</script>
