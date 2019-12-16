<template>
  <v-card
    outlined
    class="elevation-2 meal mx-auto"
    max-width="300"
    @click="$store.commit('selectMeal', meal); showMealInfo($el, meal.idMeal);"
    v-resize="removeMealInfo"
  >
    <v-img
      :src="meal.strMealThumb"
      :lazy-src="meal.strMealThumb"
      class="meal_image"
      width="100%"
      height="210"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
        </v-row>
      </template>
      <v-btn
        class="favourite_btn"
        color="deep-orange darken-3"
        icon
        large
        @click.stop="$store.commit('toogleFavourite', meal.idMeal)"
      >
        <v-icon large>{{isFavourite}}</v-icon>
      </v-btn>
    </v-img>
    <p class="meal_title subtitle-1 font-weight-bold text-center px-2 py-3 mx-auto">{{meal.strMeal}}</p>
  </v-card>
</template>

<script>
import MealInfo from "./MealInfo.vue";
import Vue from "vue";

export default {
  props: ["meal"],
  methods: {
    // Show meal info under row
    showMealInfo(el, mealId) {
      //Check if meal info component exist and delete it
      if (
        document.getElementById("showed_meal_info") &&
        this.$store.state.selectedMealId == mealId
      ) {
        document
          .getElementById("showed_meal_info")
          .parentNode.removeChild(document.getElementById("showed_meal_info"));
        return;
      } else if (document.getElementById("showed_meal_info")) {
        document
          .getElementById("showed_meal_info")
          .parentNode.removeChild(document.getElementById("showed_meal_info"));
      }
      // Create new meal info component
      let MealInfoClass = Vue.extend(MealInfo);
      var instance = new MealInfoClass({
        propsData: { meal: this.$store.state.selectedMeal }
      });
      instance.$mount();
      // Get index of element in DOM
      let nodes = Array.prototype.slice.call(
        document.getElementById("meals_container").children
      );
      let indexOfMealElement = nodes.indexOf(el.parentNode);
      // Function which add meal info to DOM
      function addChildNode(index, instance) {
        document
          .getElementById("meals_container")
          .insertBefore(
            instance.$el,
            document.getElementById("meals_container").children[index]
          );
      }
      // Add component on mobile view
      if (this.$vuetify.breakpoint.xs) {
        addChildNode(indexOfMealElement + 1, instance);
      }
      // Add component on tablet view
      if (this.$vuetify.breakpoint.sm) {
        if (indexOfMealElement % 2 == 0) {
          addChildNode(indexOfMealElement + 2, instance);
        } else if (indexOfMealElement % 2 == 1) {
          addChildNode(indexOfMealElement + 1, instance);
        }
      }
      // Add component on desktop view
      if (this.$vuetify.breakpoint.mdAndUp) {
        if (indexOfMealElement % 3 == 0) {
          addChildNode(indexOfMealElement + 3, instance);
        } else if (indexOfMealElement % 3 == 1) {
          addChildNode(indexOfMealElement + 2, instance);
        } else if (indexOfMealElement % 3 == 2) {
          addChildNode(indexOfMealElement + 1, instance);
        }
      }
      this.$store.commit("changeSelectedMealId", mealId);
    },
    removeMealInfo() {
      this.$store.dispatch("removeMealInfo");
    }
  },
  computed: {
    isFavourite() {
      if (this.$store.state.favourites.includes(this.meal.idMeal))
        return "mdi-heart";
      else return "mdi-heart-outline";
    }
  }
};
</script>