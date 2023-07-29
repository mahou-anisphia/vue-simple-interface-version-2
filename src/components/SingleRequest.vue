<template>
  <v-card>
    <v-container> {{ temp.unitCode }} </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    temp: "",
  }),
  created() {
    this.$store.dispatch("getItem", 0).then((result) => {
      this.temp = result;
      console.log(this.temp);
    });
  },
};
</script>
