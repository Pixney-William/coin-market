import { InjectionKey } from "vue";
import Currencies from "@/mock/Currencies.json";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { CryptoInterface } from "@/interfaces/CryptoInterface";
import { MutationTypes } from "@/store/mutation-types";
const cachedCurrencies = window.localStorage.getItem("cachedCurrencies");

export interface State {
  currencies: Array<CryptoInterface>;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currencies: cachedCurrencies ? JSON.parse(cachedCurrencies) : [],
  },

  mutations: {
    [MutationTypes.SET_CURRENCIES](state, currencies) {
      state.currencies = currencies;
      window.localStorage.setItem(
        "cachedCurrencies",
        JSON.stringify(state.currencies)
      );
    },
  },

  actions: {
    async fetchCryptoCurrencies({ commit }) {
      try {
        const currencies = Currencies.sort((a, b) =>
          a.price_usd > b.price_usd ? -1 : 1
        );
        commit(MutationTypes.SET_CURRENCIES, currencies);
      } catch (error) {
        console.log("Darn!", error);
      }
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
