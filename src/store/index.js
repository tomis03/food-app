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
    meals: [],
    filters: [{
        filterName: "Category",
        filterItems: []
      },
      {
        filterName: "Area",
        filterItems: []
      },
      {
        filterName: "Tags",
        filterItems: []
      }
    ],
    filterMeals: [],
    activeFilters: []
  },
  mutations: {
    changeSideMenuStatus(state) {
      state.showSideMenu = !state.showSideMenu;
    },
    changeFilterDialogStatus(state) {
      state.showFilterDialog = !state.showFilterDialog;
    },
    addMeal(state, newMeal) {
      state.meals.push(...newMeal);
      state.filterMeals.push(...newMeal);
    }
  },
  actions: {},
  modules: {}
})