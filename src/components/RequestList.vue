<template>
  <div>
    <h4 class="text-h4">Your EHC Requests</h4>
    <v-card class="mx-auto" max-width="1000">
      <v-list density="compact">
        <v-list-subheader>REPORTS</v-list-subheader>
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
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      { text: "COS20007 Hurdle Test Resit" },
      { text: "COS10025 DFD Diagram Presentation" },
      { text: "COS10009 Introduction To Programming" },
    ],
  }),
  methods: {
    click(value) {
      console.log(value.text);
    },
  },
};
</script>
