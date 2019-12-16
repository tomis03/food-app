<template>
  <v-menu v-if="$vuetify.breakpoint.smAndUp && $route.name != 'favourites'" offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn outlined v-on="on">
        <span class="mr-2">Favourites</span>
        <v-icon small>mdi-heart-outline</v-icon>
      </v-btn>
    </template>
    <v-list>
      <template v-if="$store.state.favourites.length > 0">
        <template v-for="(item, index) in $store.state.favourites">
          <v-list-item v-if="index < 4" :key="`favourite${item}`" @click="searchMeal(item)">
            <div class="d-flex">
              <v-img
                :src="favouriteMeal(item, 'strMealThumb')"
                :lazy-src="favouriteMeal(item, 'strMealThumb')"
                width="35"
                height="20"
              ></v-img>
              <span
                class="favourite_menu_text subtitle-2 text-center px-2"
              >{{favouriteMeal(item, 'strMeal')}}</span>
            </div>
          </v-list-item>
          <v-list-item
            v-if="$store.state.favourites.length >= 5 && index == 4"
            :key="`favourite${item}`"
            class="d-flex justify-center align-center"
            @click="$router.push({name: 'favourites'})"
          >
            <span class="subtitle-2 text-center px-2">See more favourites</span>
          </v-list-item>
        </template>
      </template>
      <template v-else>
        <v-list-item>
          <div class="d-flex">
            <span class="favourite_menu_text subtitle-2 text-center px-2">No favourites</span>
          </div>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  methods: {
    // Show favourite meal image or name
    favouriteMeal(id, key) {
      return this.$store.state.meals.filter(meal => meal.idMeal == id)[0][key];
    },
    // Search for meal
    searchMeal(mealId) {
      console.log(mealId);
      this.$store.dispatch("removeMealInfo");
      if (this.$route.name != "mainPage") {
        this.$router.push({ name: "mainPage" });
      }
      let searchedMeals = this.$store.state.meals.filter(meal => {
        let regex = new RegExp(mealId, "i");
        return meal.idMeal.match(regex);
      });
      this.$store.commit("changeMealsToShow", searchedMeals);
      this.$store.commit("changeSearchText", searchedMeals[0].strMeal);
    }
  }
};
</script>