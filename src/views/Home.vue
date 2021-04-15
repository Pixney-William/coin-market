<template>
  <section>
    <CurrencyList />
  </section>
</template>

<script lang="ts">
import CurrencyList from "@/components/molecules/List.vue";

export default {
  name: "Coin Market Homepage",
  components: {
    CurrencyList,
  },
};
</script>

<style scoped></style>
