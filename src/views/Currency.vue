<template>
  <div class="container mx-auto -mt-8 max-w-4xl">
    <div class="c-glassmorph shadow-2xl mx-4 rounded-3xl p-16">
      <div>
        <CurrencyIcon
          :src="$filters.makeImageSrc(currency.id_icon)"
          :alt="currency.name"
          styling="mx-auto mb-4 w-24"
        />
        <h1 class="text-center text-5xl mb-4 font-semibold">
          {{ currency.name }}
        </h1>
        <div
          class="text-center mt-8 mb-8 flex justify-between max-w-lg mx-auto bg-gray-200 p-8 py-4 rounded-md"
        >
          <p>
            <strong class="font-medium mr-2">First traded:</strong>
            {{ currency.data_start }}
          </p>
          <p>
            <strong class="font-medium mr-4">Current Price:</strong>
            {{ $filters.UsdFormattedString(currency.price_usd) }}
          </p>
        </div>
      </div>
      <div class="px-8 pb-8">
        <MonthlyChart />
      </div>
    </div>
    List other coin stuff here..
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store";
import { CryptoInterface } from "@/interfaces/CryptoInterface";
import { useRoute } from "vue-router";
import MonthlyChart from "@/components/organisms/MonthlyChart.vue";
import CurrencyIcon from "@/components/atoms/icon/CurrencyIcon.vue";

export default {
  name: "Currency",
  components: {
    MonthlyChart,
    CurrencyIcon,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("fetchCryptoCurrencies");

    const currencyId = ref(route.params.id);

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

<style scoped>
.c-glassmorph {
  background: rgba(255, 255, 255, 0.5);
}
</style>
