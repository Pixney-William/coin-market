<template>
  <div class="container">
    <CurrencyList />
  </div>
</template>

<script lang="ts">
import CurrencyList from "@/components/currency/List.vue";

export default {
  name: "Coin Market Homepage",
  components: {
    CurrencyList,
  },
};
</script>

<style scoped></style>
