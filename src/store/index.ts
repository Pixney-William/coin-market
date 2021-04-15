import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { CryptoInterface, HistoryDataInterface } from "@/interfaces/Interface";
import { MutationTypes } from "@/store/mutation-types";
import { coinApi } from "@/http/CoinApi";

export interface State {
  currencies: Array<CryptoInterface>;
  history: Array<HistoryDataInterface>;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currencies: [],
    history: [],
  },

  mutations: {
    [MutationTypes.SET_CURRENCIES](state, currencies) {
      state.currencies = currencies;
    },
    [MutationTypes.SET_HISTORY](state, history) {
      state.history = history;
    },
    [MutationTypes.UNSET_HISTORY](state) {
      state.history = [];
    },
  },

  actions: {
    /**
     * Get and sort crypto currencies.
     *
     * @param  {*} commit
     * @param  {*} state
     */
    async fetchCryptoCurrencies({ commit, state }) {
      // If we already have currencies, don't get them again
      // to save our free daily requests from the api.
      if (state.currencies.length) return;

      try {
        const response = await coinApi.get("assets");

        // Filter currencies that are crypto currencies and has a set price.
        let currencies = response.data.filter((curr: CryptoInterface) => {
          return curr.type_is_crypto && curr.price_usd !== undefined;
        });

        // Sort currencies listing the most expensive first.
        currencies = currencies.sort((a: CryptoInterface, b: CryptoInterface) =>
          a.price_usd > b.price_usd ? -1 : 1
        );
        commit(MutationTypes.SET_CURRENCIES, currencies);
      } catch (error) {
        console.warn("Oops: ", error);
      }
    },
    async fetchHistoryData({ commit }, currency) {
      commit(MutationTypes.UNSET_HISTORY);
      try {
        const response = await coinApi.get(
          `ohlcv/${currency}/USD/latest?period_id=4MTH`
        );

        commit(MutationTypes.SET_HISTORY, response.data);
      } catch (error) {
        console.warn("Oops!: ", error);
      }
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
