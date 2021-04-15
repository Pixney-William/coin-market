import { InjectionKey } from "vue";
import Currencies from "@/mock/Currencies.json";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { CryptoInterface } from "@/interfaces/CryptoInterface";
import { MutationTypes } from "@/store/mutation-types";


export interface State {
  currencies: Array<CryptoInterface>;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currencies: [],
  },

  mutations: {
    [MutationTypes.SET_CURRENCIES](state, currencies) {
      state.currencies = currencies;
    },
  },

  actions: {
    async fetchCryptoCurrencies({ commit }) {
      try {
        const currencies = Currencies.sort((a, b) =>
          a.price_usd > b.price_usd ? -1 : 1
        );
        //const currencies = Currencies.sort((a, b) => a.price_usd - b.price_usd);
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
