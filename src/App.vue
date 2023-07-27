<template>
  <v-app>
    <v-toolbar app> </v-toolbar>
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
