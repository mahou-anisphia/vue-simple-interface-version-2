<template>
  <div>
    <v-card class="mx-auto">
      <v-container>
        <v-toolbar dark>
          <v-toolbar-title>Your EHC Requests</v-toolbar-title>
        </v-toolbar>
        <v-list density="compact">
          <v-list-subheader>Ongoing Requests</v-list-subheader>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            @click="click(items[i])"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    items: [],
  }),
  methods: {
    click(value) {
      console.log(value.text);
    },
  },
  async created() {
    this.items = (await axios.get("http://localhost:3000/items")).data;
  },
};
</script>
