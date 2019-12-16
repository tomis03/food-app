<template>
  <div id="main_page" class="full_height">
    <v-row :class="['ma-0', $vuetify.breakpoint.mdAndUp ? 'full_height' : '']">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" class="elevation-1 col-12 col-md-3 full_height">
        <Filters />
      </v-col>
      <v-col class="col-12 px-0" v-if="$vuetify.breakpoint.smAndDown">
        <v-btn
          outlined
          color="deep-orange darken-2"
          large
          class="px-10 subtitle-1 font-weight-bold"
          @click="$store.commit('changeFilterDialogStatus')"
        >Filter</v-btn>
      </v-col>
      <v-col class="col-12 col-md-9 pa-0 full_height">
        <template v-if="$store.state.mealsToShow.length > 0">
          <v-row class="ma-0 meals_container" id="meals_container">
            <template v-for="(meal, index) in $store.state.mealsToShow">
              <v-col
                :key="`meal${index}`"
                :id="meal.idMeal"
                class="meal_container col-12 col-sm-6 col-md-4"
              >
                <Meal :meal="meal" />
              </v-col>
            </template>
          </v-row>
        </template>
        <template v-else>
          <p
            class="headline font-weight-bold text-center deep-orange--text text-darken-2 mt-6"
          >No meals</p>
        </template>
      </v-col>
    </v-row>
    <v-dialog
      fullscreen
      v-model="$store.state.showFilterDialog"
      v-if="$vuetify.breakpoint.smAndDown"
      content-class="filter_dialog"
    >
      <v-card class="pa-3">
        <v-card max-width="400" flat class="mx-auto">
          <Filters />
          <div class="d-flex mt-6">
            <v-spacer />
            <v-btn outlined color="deep-orange darken-2" @click="toogleFilterDialog">Close</v-btn>
          </div>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {
    Meal: () => import("../components/Meal.vue"),
    Filters: () => import("../components/Filters.vue")
  },
  methods: {
    toogleFilterDialog() {
      document.getElementsByClassName("filter_dialog")[0].scrollTop = 0;
      this.$store.commit("changeFilterDialogStatus");
    }
  }
};
</script>

<style lang="scss">
.filter_text {
  max-width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#main_page {
  @media (min-width: 960px) {
    .full_height {
      max-height: calc(100vh - 80px);
    }
  }

  .col.full_height {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
    }
  }
}
</style>