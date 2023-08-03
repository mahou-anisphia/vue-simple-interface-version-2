<template>
  <v-container>
    <h4 class="text-h4">Currently Ongoing EHC Requests</h4>
    <div
      v-for="(item, i) in $store.state.items"
      :key="i"
      :value="item"
      color="primary"
    >
      <v-card class="mx-auto">
        <v-container>
          <v-toolbar>
            <v-toolbar-title v-text="item.unitCode"></v-toolbar-title>
          </v-toolbar>
          <v-list density="compact">
            <v-list-item :to="'singlerequest/' + i">
              <v-list-item-title v-cloak
                >Details: {{ item.details }}</v-list-item-title
              >
              <v-list-item-subtitle v-cloak
                >User Ordered: {{ item.user }}</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-container>
      </v-card>
      <br />
    </div>
  </v-container>
</template>
<script>
export default {
  methods: {},
  async created() {
    this.$store.dispatch("getItems");
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>
