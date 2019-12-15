<template>
  <div>
    <v-card outlined class="elevation-2 mx-auto" max-width="300">
      <v-img :src="meal.strMealThumb" :lazy-src="meal.strMealThumb" width="100%" height="210">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <p
        class="meal_title subtitle-1 font-weight-bold text-center px-2 py-3 mx-auto"
      >{{meal.strMeal}}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["meal"]
};
</script>