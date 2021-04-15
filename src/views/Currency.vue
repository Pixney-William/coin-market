<template>
  <div class="container mx-auto -mt-8 max-w-4xl">
    <CardHistory />
    <div class="mt-12 px-4">Coming soon...</div>
  </div>
</template>

<script lang="ts">
import CardHistory from "@/components/molecules/CardHistory.vue";

export default {
  name: "Currency",
  components: {
    CardHistory,
  },
};
</script>

<style scoped>
.c-glassmorph {
  background: rgba(255, 255, 255, 0.5);
}
</style>
