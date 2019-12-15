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
      <v-btn outlined v-if="$vuetify.breakpoint.smAndUp">
        <span class="mr-2">Favourites</span>
        <v-icon small>mdi-heart-outline</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { debounce } from "lodash";

export default {
  methods: {
    // Searching meals by typed text
    searchMeals: debounce(function() {
      let searchedMeals = this.$store.state.meals.filter(meal => {
        let regex = new RegExp(`${this.$store.state.searchText || ""}`, "i");
        return meal.strMeal.match(regex);
      });
      this.$store.commit("changeMealsToShow", searchedMeals);
    }, 500)
  }
};
</script>

<style lang="scss">
.search_bar {
  max-width: 350px;
}
</style>