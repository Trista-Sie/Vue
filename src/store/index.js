import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order_list: [
      { name: "焦糖星冰樂", price: 130, amount: 0 },
      { name: "焦糖可可星冰樂", price: 145, amount: 0 },
      { name: "英式紅茶", price: 110, amount: 0 },
      { name: "冰蜜柚紅茶", price: 125, amount: 0 },
      { name: "太妃核果風味那堤", price: 145, amount: 0 },
      { name: "耶誕雪人巧克力那堤", price: 150, amount: 0 },
      { name: "法式千層薄餅", price: 95, amount: 0 },
      { name: "咖啡巧克力松露蛋糕", price: 85, amount: 0 },
      { name: "提拉米蘇千層薄餅", price: 100, amount: 0 },
      { name: "可可伯爵薄餅", price: 130, amount: 0 }
    ]
  },
  mutations: {
    INCREMENT_ORDER(state) {
      state.order_list.amount++;
      state.order_list.price = state.order_list * state.order_list.price;
    },
    DECREMENT_ORDER(state) {
      state.order_list.amount--;
      if (state.order_list.amount < 0) {
        state.order_list.amount = 0
      }
      state.order_list.price = state.order_list * state.order_list.price;
    }
  },
  getters: {
    get_order_list(state) {
      return state.order_list
    }
  }
})
