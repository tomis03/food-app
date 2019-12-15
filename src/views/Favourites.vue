<template>
  <div id="favourite_page">
    <div
      :class="[$vuetify.breakpoint.mdAndUp ? 'full_height' : '', $store.state.mealsToShow == 0 ? '' : 'favourites_container']"
    >
      <template v-if="$store.state.favourites.length > 0">
        <div
          v-for="(item, index) in $store.state.favourites"
          :key="`meal${index}`"
          class="pb-6 px-3"
        >
          <v-card outlined class="favourite_container elevation-2 mx-auto" max-width="300">
            <v-img
              :src="favouriteMeal(item, 'strMealThumb')"
              :lazy-src="favouriteMeal(item, 'strMealThumb')"
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
                @click.stop="$store.commit('toogleFavourite', item)"
              >
                <v-icon large>{{isFavourite(item)}}</v-icon>
              </v-btn>
            </v-img>
            <p
              class="meal_title subtitle-1 font-weight-bold text-center px-2 py-3 mx-auto"
            >{{favouriteMeal(item, 'strMeal')}}</p>
          </v-card>
        </div>
      </template>
      <template v-else>
        <p
          class="headline font-weight-bold text-center deep-orange--text text-darken-2 mt-6"
        >No favourites</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    favouriteMeal(id, key) {
      return this.$store.state.meals.filter(meal => meal.idMeal == id)[0][key];
    },
    isFavourite(id) {
      if (this.$store.state.favourites.includes(id)) return "mdi-heart";
      else return "mdi-heart-outline";
    }
  }
};
</script>

<style lang="scss">
.favourites_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  .meal_title {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .favourite_container {
    cursor: pointer;
  }

  .meal_image {
    position: relative;

    .favourite_btn {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>