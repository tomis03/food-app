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
    filters: {
      category: {
        filterName: "Category",
        filterItems: []
      },
      area: {
        filterName: "Area",
        filterItems: []
      },
      tags: {
        filterName: "Tags",
        filterItems: []
      }
    },
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
    addMealAndFiltersToStore(state, newMeal) {
      state.meals.push(...newMeal);
      state.filterMeals.push(...newMeal);
      newMeal.forEach(meal => {
        if (meal.strCategory != null) {
          state.filters.category.filterItems.push(meal.strCategory);
        }
        if (meal.strArea != null) {
          state.filters.area.filterItems.push(meal.strArea);
        }
        if (meal.strTags != null) {
          state.filters.tags.filterItems.push(meal.strTags);
        }
      });
      state.filters.category.filterItems = [...new Set(state.filters.category.filterItems)];
      state.filters.area.filterItems = [...new Set(state.filters.area.filterItems)];
      state.filters.tags.filterItems = [...new Set(state.filters.tags.filterItems)];
    }
  },
  actions: {},
  modules: {}
})