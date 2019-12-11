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
        placeholder="Search your meal"
        :items="components"
        class="search_bar"
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
export default {
  data() {
    return {
      components: [
        "Autocompletes",
        "Comboboxes",
        "Forms",
        "Inputs",
        "Overflow Buttons",
        "Selects",
        "Selection Controls",
        "Sliders",
        "Textareas",
        "Text Fields"
      ]
    };
  }
};
</script>

<style lang="scss">
.search_bar {
  max-width: 350px;
}
</style>