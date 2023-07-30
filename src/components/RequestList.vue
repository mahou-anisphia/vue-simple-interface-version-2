<template>
  <div>
    <v-card class="mx-auto">
      <v-container>
        <v-toolbar>
          <v-toolbar-title>Your EHC Requests</v-toolbar-title>
        </v-toolbar>
        <v-list density="compact">
          <v-list-subheader>Ongoing Requests</v-list-subheader>
          <v-list-item
            v-for="(item, i) in $store.state.items"
            :key="i"
            :value="item"
            color="primary"
            :to="'singlerequest/' + i"
          >
            <v-list-item-title v-text="item.unitCode"></v-list-item-title>
            <v-list-item-subtitle v-text="item.details"></v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {},
  async created() {
    this.$store.dispatch("getItems");
  },
};
</script>
