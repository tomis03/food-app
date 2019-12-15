<template>
  <div>
    <p class="title font-weight-bold">Filter by:</p>
    <template v-if="$store.state.filters">
      <div class="py-3" v-for="(filter, index) in $store.state.filters" :key="`filter${index}`">
        <p class="subtitle-1 font-weight-bold">{{filter.filterName}}</p>
        <v-checkbox
          hide-details
          class="mt-2 ml-2"
          color="deep-orange darken-2"
          v-for="item in filter.filterItems"
          :key="`item${item}`"
          :label="`${item}`"
          :title="`${item}`"
          :value="`${item}`"
          v-model="$store.state.activeFilters[index]"
          @change="clearSearchInput"
        >
          <template v-slot:label>
            <span class="filter_text subtitle-1">{{item}}</span>
          </template>
        </v-checkbox>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    // Clear search input if something is entered
    clearSearchInput() {
      if (this.$store.state.searchText) {
        this.$store.commit("changeSearchText", null);
        this.$store.commit("changeMealsToShow", this.$store.state.meals);
      }
    }
  }
};
</script>