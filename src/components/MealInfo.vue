<template>
  <v-col id="showed_meal_info" class="col-12">
    <v-card width="100%">
      <v-row class="ma-0">
        <v-col class="col-12 col-md-5 pa-0">
          <iframe
            width="100%"
            height="350"
            :src="`https://www.youtube.com/embed/${meal.strYoutube.slice(32)}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="border-radius: 4px;"
          ></iframe>
        </v-col>
        <v-col class="col-12 col-md-7">
          <p class="title mb-2">Instructions:</p>
          <p class="subtitle-1 mb-4" v-html="meal.strInstructions.replace(/(?:\r\n)/g, '<br />')"></p>
          <p class="title mb-2">Ingredients + Measure</p>
          <template v-for="(item, index) in ingredients">
            <p v-if="meal[item.ingredient] != ''" :key="`ingredient${index}`" class="subtitle-1">
              <span>{{meal[item.ingredient]}}</span>
              -
              <span>{{meal[item.measure]}}</span>
            </p>
          </template>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["meal"],
  data() {
    return {
      ingredients: [
        { ingredient: "strIngredient1", measure: "strMeasure1" },
        { ingredient: "strIngredient2", measure: "strMeasure2" },
        { ingredient: "strIngredient3", measure: "strMeasure3" },
        { ingredient: "strIngredient4", measure: "strMeasure4" },
        { ingredient: "strIngredient5", measure: "strMeasure5" },
        { ingredient: "strIngredient6", measure: "strMeasure6" },
        { ingredient: "strIngredient7", measure: "strMeasure7" },
        { ingredient: "strIngredient8", measure: "strMeasure8" },
        { ingredient: "strIngredient9", measure: "strMeasure9" },
        { ingredient: "strIngredient10", measure: "strMeasure10" },
        { ingredient: "strIngredient11", measure: "strMeasure11" },
        { ingredient: "strIngredient12", measure: "strMeasure12" },
        { ingredient: "strIngredient13", measure: "strMeasure13" },
        { ingredient: "strIngredient14", measure: "strMeasure14" },
        { ingredient: "strIngredient15", measure: "strMeasure15" },
        { ingredient: "strIngredient16", measure: "strMeasure16" },
        { ingredient: "strIngredient17", measure: "strMeasure17" },
        { ingredient: "strIngredient18", measure: "strMeasure18" },
        { ingredient: "strIngredient19", measure: "strMeasure19" },
        { ingredient: "strIngredient20", measure: "strMeasure20" }
      ]
    };
  }
};
</script>