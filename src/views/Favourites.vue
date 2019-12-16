<template>
  <div id="favourite_page">
    <v-row class="ma-0 favourites_container">
      <template v-if="$store.state.favourites.length > 0">
        <v-col
          v-for="(item, index) in $store.state.favourites"
          :key="`meal${index}`"
          class="col-12 col-sm-6 col-md-4"
        >
          <v-card outlined class="meal elevation-2 mx-auto" max-width="300">
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
        </v-col>
      </template>
      <template v-else>
        <v-col class="col-12">
          <p
            class="headline font-weight-bold text-center deep-orange--text text-darken-2 mt-6"
          >No favourites</p>
        </v-col>
      </template>
    </v-row>
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
</style>