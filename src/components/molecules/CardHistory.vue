<template>
  <div class="m-card-history">
    <CardHistoryHeader v-if="currency" :currency="currency" />
    <ChartLine v-if="historyData.length" :history="historyData" />
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store";
import { CryptoInterface } from "@/interfaces/Interface";
import { useRoute } from "vue-router";
import CardHistoryHeader from "@/components/molecules/CardHistoryHeader.vue";
import ChartLine from "@/components/molecules/chart/ChartLine.vue";

export default {
  name: "CardHistory",
  components: { CardHistoryHeader, ChartLine },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const store = useStore();
    const route = useRoute();
    const currencyId = ref(route.params.id);

    store.dispatch("fetchCryptoCurrencies");
    store.dispatch("fetchHistoryData", currencyId.value);

    let historyData = computed(() => store.state.history);

    const currencies = computed(() => store.state.currencies);

    const currency = computed(() => {
      return currencies.value.find(
        (c: CryptoInterface) => c.asset_id === currencyId.value
      );
    });

    return { currency, historyData };
  },
};
</script>

<style lang="css" scoped>
.m-card-history {
  background: rgba(255, 255, 255, 0.5);
  @apply shadow-2xl mx-4 rounded-3xl p-16;
}
</style>
