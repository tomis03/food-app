import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VuePageTransition from 'vue-page-transition'
import {
  mapState
} from 'vuex'
import {
  debounce
} from 'lodash'

Vue.use(VuePageTransition)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  mounted() {
    // Get meals from localStorage or if don't exist get from API
    if (localStorage.getItem("meals")) {
      store.commit("addMealAndFiltersToStore", JSON.parse(localStorage.getItem("meals")));
    } else {
      for (let i = 0; i <= 9; i++) {
        this.$axios
          .get("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => {
            store.commit("addMealAndFiltersToStore", [res.data.meals[0]]);
            localStorage.setItem(
              "meals",
              JSON.stringify(store.state.meals)
            );
          });
      }
    }
    // Get favourites from localStorage
    if (localStorage.getItem('favourites')) {
      store.commit('addFavouritesFromLocalStorage', JSON.parse(localStorage.getItem("favourites")))
    }
  },
  watch: {
    // Changing meals if filters changed
    activeFilters: {
      handler: debounce((newValue, oldValue) => {
        let categoryItems = [];
        let areaItems = [];
        let tagsItems = [];
        let filterItems = [];
        for (let filterCategory in newValue) {
          // Get category filter items
          if (filterCategory == 'category') {
            for (let item of store.state.meals) {
              for (let name of store.state.activeFilters[filterCategory]) {
                item.strCategory == name ? categoryItems.push(item) : false;
              }
            }
          }
          // Get area filter items
          if (filterCategory == 'area') {
            for (let item of store.state.meals) {
              for (let name of store.state.activeFilters[filterCategory]) {
                item.strArea == name ? areaItems.push(item) : false;
              }
            }
          }
          // Get tags filter items
          if (filterCategory == 'tags') {
            for (let item of store.state.meals) {
              for (let name of store.state.activeFilters[filterCategory]) {
                item.strTags == name ? tagsItems.push(item) : false;
              }
            }
          }
        }
        categoryItems.forEach(item => filterItems.push(item));
        areaItems.forEach(item => filterItems.push(item));
        tagsItems.forEach(item => filterItems.push(item));
        store.commit(
          "changeMealsToShow",
          [...new Set(filterItems)].length > 0 ? [...new Set(filterItems)] : store.state.meals
        );
      }, 500),
      deep: true
    }
  },
  computed: mapState(['activeFilters']),
  render: h => h(App)
}).$mount('#app')