<template>
  <v-app-bar color="deep-orange darken-2" app short dark>
    <v-container class="d-flex align-center py-0">
      <v-btn icon @click="$store.commit('changeSideMenuStatus')">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer />
      <v-text-field
        color="white"
        max-width="350"
        clearable
        hide-details
        dense
        flat
        prepend-inner-icon="mdi-magnify"
        append-icon
        no-data-text="No meals"
        v-model="$store.state.searchText"
        placeholder="Search your meal"
        class="search_bar"
        @input="searchMeals(); $store.commit('clearActiveFilters');"
      ></v-text-field>
      <v-spacer />
      <FavouritesMenu />
    </v-container>
  </v-app-bar>
</template>

<script>
import { debounce } from "lodash";

export default {
  components: {
    FavouritesMenu: () => import("@/components/FavouriteMenu.vue")
  },
  methods: {
    // Searching meals by typed text
    searchMeals: debounce(function() {
      this.$store.dispatch("removeMealInfo");
      if (this.$route.name != "mainPage") {
        this.$router.push({ name: "mainPage" });
      }
      let searchedMeals = this.$store.state.meals.filter(meal => {
        let regex = new RegExp(`${this.$store.state.searchText || ""}`, "i");
        return meal.strMeal.match(regex);
      });
      this.$store.commit("changeMealsToShow", searchedMeals);
    }, 501)
  }
};
</script>

<style lang="scss">
.search_bar {
  max-width: 350px;
}

.favourite_menu_text {
  widows: 100%;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>