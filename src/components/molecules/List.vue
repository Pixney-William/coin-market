<template>
  <div class="container mx-auto">
    <ul class="m-currency-list">
      <CurrencyListItem
        v-for="currency in currencies"
        :key="currency.asset_id"
        :currency="currency"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
// TODO: Should we or shouldn't we pass currency as a property?

import { useStore } from "@/store/index";
import CurrencyListItem from "@/components/molecules/ListItem.vue";

export default {
  name: "CurrencyList",

  components: {
    CurrencyListItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchCryptoCurrencies");
    const currencies = computed(() => store.state.currencies);
    return { currencies };
  },
};
</script>

<style scoped>
.m-currency-list {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 sm:gap-4 xl:gap-8;
}
</style>
