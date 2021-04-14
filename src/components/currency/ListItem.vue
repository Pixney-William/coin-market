<template>
  <li class="c-currency-list-item">
    <figure>
      <img
        class="c-currency-list-item__img"
        :src="$filters.currencyUSD(currency.id_icon)"
        :alt="currency.name"
      />
      <figcaption>{{ currency.name }}</figcaption>
    </figure>

    <router-link :to="'/currency/' + currency.asset_id"> More information </router-link>
    {{ currency.asset_id }}

    {{ currency.price_usd }}
    {{ currency.id_icon }}
  </li>
</template>

<script lang="ts">
//import { useStore } from "@/store";

export default {
  name: "CurrencyListItem",

  props: {
    currency: Object,
  },
};
</script>
