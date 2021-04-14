<template>
  <div>
    <img
      class="c-currency-list-item__img"
      :src="$filters.currencyUSD(currency.id_icon)"
      :alt="currency.name"
    />
    <h1>{{ currencyId }}</h1>
    <ul>
      <li>{{ currency.name }}</li>
      <li>{{ currency.data_start }}</li>
      <li>{{ currency.price_usd }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store";
import { CryptoInterface } from "@/interfaces/CryptoInterface";
import { useRoute } from "vue-router";
export default {
  name: "Currency",

  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("fetchCryptoCurrencies");

    const currencyId = ref(route.params.id); //this.$route.params.id;
    const currencies = computed(() => store.state.currencies);

    const currency = computed(() => {
      return currencies.value.find(
        (c: CryptoInterface) => c.asset_id === currencyId.value
      );
    });

    return { currencyId, currencies, currency };
  },
};
</script>
