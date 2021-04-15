<template>
  <li class="m-list-item">
    <div class="text-base flex justify-between uppercase">
      <span class="font-semibold tracking-wider">{{ currency.asset_id }}</span>
      <span>{{ $filters.UsdFormattedString(currency.price_usd) }}</span>
    </div>
    <ListItemHeader />
    <CurrencyIcon
      :src="$filters.makeImageSrc(currency.id_icon)"
      :alt="currency.name"
      styling="mx-auto my-16"
    />

    <p class="text-center mb-4 font-medium tracking-wide text-xl 2xl:text-2xl">
      {{ currency.name ?? currency.asset_id }}
    </p>
    <LinkButton :to="$filters.linkToCurrency(currency.asset_id)" />
  </li>
</template>

<script lang="ts">
import CurrencyIcon from "@/components/atoms/icon/CurrencyIcon.vue";
import LinkButton from "@/components/atoms/button/LinkButton.vue";
import ListItemHeader from "@/components/atoms/header/ListItemHeader.vue";

export default {
  name: "CurrencyListItem",
  components: { CurrencyIcon, LinkButton, ListItemHeader },
  props: {
    currency: Object,
  },
};
</script>

<style scoped>
.m-list-item {
  @apply w-full mx-auto border border-gray-100 p-8 max-w-card sm:max-w-none rounded-xl shadow-2xl hover:bg-white hover:shadow-xl transition-all duration-500;
  background: rgba(255, 255, 255, 0.4);
}
</style>
