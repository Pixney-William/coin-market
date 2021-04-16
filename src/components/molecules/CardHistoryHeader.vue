<template>
  <div class="m-card-history-header">
    <CurrencyIcon
      class="m-card-history-header__icon"
      :src="currency.id_icon ?? ''"
      :alt="currency.name"
    />
    <div class="m-card-history-header__right">
      <Title :level="1" class="m-card-history-header__title">
        {{ currency.name }}
      </Title>

      <ul class="m-card-history-header__list">
        <li>
          <strong class="font-medium mr-2">Started:</strong>
          {{ currency.data_start }}
        </li>
        <li>
          <strong class="font-medium mr-4">Price:</strong>
          {{ $format.currencyString(currency.price_usd) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import CurrencyIcon from "@/components/atoms/icon/CurrencyIcon.vue";
export default {
  components: { CurrencyIcon },
  props: ["currency"],
};
</script>

<style>
.m-card-history-header {
  @apply grid grid-cols-4 gap-x-0 border-b pb-8 mb-8;
}
.m-card-history-header__icon {
  @apply w-28 col-span-1;
}
.m-card-history-header__title {
  @apply font-semibold text-6xl text-left;
}
.m-card-history-header__right {
  @apply col-span-3;
}
.m-card-history-header__list {
  @apply mt-2;
}
</style>
