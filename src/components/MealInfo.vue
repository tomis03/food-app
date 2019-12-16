<template>
  <v-col id="showed_meal_info" class="col-12">
    <v-card width="100%">{{meal.strMeal}}</v-card>
  </v-col>
</template>

<script>
export default {
  props: ["meal"]
};
</script>