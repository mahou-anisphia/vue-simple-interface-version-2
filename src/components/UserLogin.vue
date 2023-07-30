<template>
  <div>
    <v-card>
      <v-container>
        <v-form ref="form">
          <h4 class="text-h4">Login</h4>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Username"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-btn class="me-4" @click="handleSubmit"> Login </v-btn>
              <v-btn @click="handleReset"> clear </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-container>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="timeout" v-cloak>
      {{ showRegResult }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    showPassword: false,
    usernameRules: [(value) => !!value || "Username is required."],
    passwordRules: [
      (value) => !!value || "Password is required.",
      (value) =>
        (value && value.length > 8) || "Password must be longer than 8 digits.",
      (value) =>
        /^(?=.*[A-Z])(?=.*\d).*$/.test(value) ||
        "Password must include a capital letter and a number.",
    ],
    registerResult: "",
    showRegResult: "",
    snackbar: false,
    timeout: 2000,
  }),
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const trimmedUsername = this.username.trim();
        const trimmedPassword = this.password.trim();

        const objToSend = {
          username: trimmedUsername,
          password: trimmedPassword,
        };
        this.registerResult = await this.$store.dispatch("register", objToSend);
        if (this.registerResult === "ERR_BAD_REQUEST") {
          this.snackbar = true;
          this.showRegResult = "Username Already Exist";
        } else if (this.registerResult != "registered") {
          this.snackbar = true;
          this.showRegResult = `An error occured: ${this.registerResult}`;
        } else {
          this.snackbar = true;
          this.showRegResult = "Registered Successfully";
        }
        this.$refs.form.reset();
      }
    },
    handleReset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>
