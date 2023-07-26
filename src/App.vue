<template>
  <v-app>
    <v-toolbar app> </v-toolbar>
    <v-main>
      <RequestList />
    </v-main>
  </v-app>
</template>

<script>
import RequestList from "./components/RequestList.vue";

export default {
  name: "App",

  components: {
    RequestList,
  },

  data: () => ({
    //
  }),
};
</script>
