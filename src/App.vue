<template>
  <v-app>
    <v-toolbar app>
      <v-avatar rounded="0" size="x-large">
        <v-img src="img/ehc-logo.png"></v-img>
      </v-avatar>
      <v-btn flat to="/">Requests</v-btn>
      <v-btn flat to="/addrequest">Add Requests</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>Login</v-btn>
    </v-toolbar>
    <v-container>
      <v-main>
        <br />
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
