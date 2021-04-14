<template>
  <ul class="c-currency-list c-list--reset">
    <CurrencyListItem
      v-for="currency in currencies"
      :key="currency.asset_id"
      :currency="currency"
    />
  </ul>
</template>

<script lang="ts">
import { computed } from "vue";
// TODO: Should we or shouldn't we pass currency as a property?

import { useStore } from "@/store";

import CurrencyListItem from "@/components/currency/ListItem.vue";

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
