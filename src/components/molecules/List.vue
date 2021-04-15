<template>
  <div class="container mx-auto">
    <ul class="m-currency-list">
      <li
        class="m-card"
        v-for="currency in currencies"
        :key="currency.asset_id"
      >
        <div class="m-card-header">
          <span class="font-semibold tracking-wider">
            {{ currency.asset_id }}
          </span>
          <span>
            {{ $filters.UsdFormattedString(currency.price_usd) }}
          </span>
        </div>

        <CurrencyIcon
          class="m-card__icon"
          :src="currency.id_icon"
          :alt="currency.name"
        />

        <Title class="m-card__title" :level="2">
          {{ currency.name ?? currency.asset_id }}
        </Title>

        <LinkButton :to="$filters.linkToCurrency(currency.asset_id)" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import CurrencyIcon from "@/components/atoms/icon/CurrencyIcon.vue";
import LinkButton from "@/components/atoms/button/LinkButton.vue";
import { useStore } from "@/store/index";

export default {
  name: "CurrencyList",

  components: {
    CurrencyIcon,
    LinkButton,
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
.m-card {
  @apply w-full mx-auto border border-gray-100 p-8 max-w-card sm:max-w-none rounded-xl shadow-2xl hover:bg-white hover:shadow-xl transition-all duration-500;
  background: rgba(255, 255, 255, 0.4);
}
.m-card__title {
  @apply text-center mb-4 font-medium tracking-wide text-xl 2xl:text-2xl;
}
.m-card-header {
  @apply text-base flex justify-between uppercase;
}
.m-card__icon {
  @apply mx-auto mt-16 mb-24;
}
</style>
