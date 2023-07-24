<template>
  <div v-for="note in notes" v-bind:key="note">
    <p>{{ note }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notes: ["anisphia", "mahou", "is", "the", "best"],
    };
  },
};
</script>
