<template>
  <v-card>
    <v-container>
      <v-form ref="form">
        <h4 class="text-h4">Add Another Request</h4>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="unitCode"
                :rules="unitCodeRules"
                :counter="10"
                label="Unit Code"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="completionMethod"
                :rules="completionMethodRule"
                :counter="30"
                type="text"
                label="Completion Method (ie: Ruby Code)"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                type="email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="details"
                :rules="reqDetailRule"
                :counter="150"
                type="text"
                label="Detail of your requested assignment"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to our terms to continue']"
          label="Agree to our Terms and Conditions: We will send you an e-mail soon to announce you about the pricing and
              payment of your request. EHC is a pay-as-you-go service so your request
              will be rated and the price will be decided by our team, based on your task's requirements."
          required
        ></v-checkbox>
        <v-btn class="me-4" @click="handleSubmit"> submit </v-btn>
        <v-btn @click="handleReset"> clear </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    unitCode: "",
    completionMethod: "",
    details: "",
    unitCodeRules: [
      (value) => {
        if (value) return true;

        return "Unit Code is required.";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Unit Code must be less than 10 characters.";
      },
    ],
    completionMethodRule: [
      (value) => {
        if (value) return true;

        return "Completion Method is required.";
      },
      (value) => {
        if (value?.length <= 30) return true;

        return "Completion Method must be less than 10 characters.";
      },
    ],
    reqDetailRule: [
      (value) => {
        if (value) return true;

        return "Assignment Details is required.";
      },
      (value) => {
        if (value?.length <= 150) return true;

        return "Assignment Details must be less than 150 characters.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
    checkbox: false,
  }),
  methods: {
    handleReset() {
      this.$refs.form.reset();
    },
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const objToSend = {
          unitCode: this.unitCode,
          completionMethod: this.completionMethod,
          email: this.email,
          details: this.details,
        };
        this.$store.dispatch("addItem", objToSend);
        this.$refs.form.reset();
      }
    },
  },
};
</script>
