<template>
  <v-app>
    <v-toolbar app>
      <v-avatar rounded="0" size="x-large">
        <v-img src="img/ehc-logo.png"></v-img>
      </v-avatar>
      <v-btn flat>Requests</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>Login</v-btn>
    </v-toolbar>
    <v-container>
      <v-main>
        <AddRequest />
        <br />
        <RequestList />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import RequestList from "./components/RequestList.vue";
import AddRequest from "./components/AddRequest.vue";

export default {
  name: "App",

  components: {
    RequestList,
    AddRequest,
  },

  data: () => ({
    //
  }),
};
</script>
