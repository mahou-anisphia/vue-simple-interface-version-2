<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-text>
        <div>Your EHC Detailed Request</div>
        <p class="text-h4 text--primary" v-cloak>{{ temp.unitCode }}</p>
        <p v-cloak>{{ temp.completionMethod }}</p>
        <div class="text--primary" v-cloak>
          {{ temp.details }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
          Show Contact Details
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary" v-cloak>
              Customer {{ temp.user }}'s E-mail
            </p>
            <p v-cloak>
              <a href="mailto:{{ temp.email }}">{{ temp.email }}</a>
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
              Hide Contact Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
    temp: "",
  }),
  created() {
    this.$store.dispatch("getItem", this.$route.params.id).then((result) => {
      this.temp = result;
      console.log(this.temp);
    });
  },
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
[v-cloak] {
  display: none;
}
</style>
