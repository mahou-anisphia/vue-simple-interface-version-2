<template>
  <v-card>
    <v-container>
      <v-form ref="form">
        <h4 class="text-h4">Register</h4>
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
            <v-btn class="me-4" @click="handleSubmit"> Register </v-btn>
            <v-btn @click="handleReset"> clear </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </v-card>
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
  }),
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const objToSend = {
          username: this.username,
          password: this.password,
        };
        this.$store.dispatch("register", objToSend);
        this.$refs.form.reset();
      }
    },
    handleReset() {
      this.$refs.form.reset();
    },
  },
};
</script>
