import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSideMenu: false,
    showFilterDialog: false,
    links: [{
        title: 'Home',
        name: "mainPage"
      },
      {
        title: 'Favourites',
        name: "favourites"
      }
    ],
    meals: []
  },
  mutations: {
    changeSideMenuStatus(state) {
      state.showSideMenu = !state.showSideMenu;
    },
    changeFilterDialogStatus(state) {
      state.showFilterDialog = !state.showFilterDialog;
    },
    addMeal(state, newMeal) {
      state.meals.push(newMeal)
    }
  },
  actions: {},
  modules: {}
})