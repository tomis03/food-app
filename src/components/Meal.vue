<template>
  <div>
    <v-card outlined class="elevation-2 mx-auto" max-width="300">
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
      <p
        class="meal_title subtitle-1 font-weight-bold text-center px-2 py-3 mx-auto"
      >{{meal.strMeal}}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["meal"],
  computed: {
    isFavourite() {
      if (this.$store.state.favourites.includes(this.meal.idMeal))
        return "mdi-heart";
      else return "mdi-heart-outline";
    }
  }
};
</script>

<style lang="scss">
.meal_image {
  position: relative;

  .favourite_btn {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: rgba(255, 255, 255, 0.6);
  }
}
</style>