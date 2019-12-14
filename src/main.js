import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VuePageTransition from "vue-page-transition"

Vue.use(VuePageTransition)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  mounted() {
    console.log(this);
    // Get meals from localStorage or if don't exist get from API
    if (localStorage.getItem("meals")) {
      this.$store.commit("addMealAndFiltersToStore", JSON.parse(localStorage.getItem("meals")));
    } else {
      for (let i = 0; i <= 9; i++) {
        this.$axios
          .get("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => {
            this.$store.commit("addMealAndFiltersToStore", [res.data.meals[0]]);
            localStorage.setItem(
              "meals",
              JSON.stringify(this.$store.state.meals)
            );
          });
      }
    }
  },
  render: h => h(App)
}).$mount('#app')