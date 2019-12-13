<template>
  <div id="main_page" class="full_height">
    <v-row :class="['ma-0', $vuetify.breakpoint.mdAndUp ? 'full_height' : '']">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" class="elevation-1 col-12 col-md-3 full_height">
        <p class="title font-weight-bold">Filter by:</p>
      </v-col>
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        outlined
        color="deep-orange darken-2"
        large
        class="px-10 mb-3 subtitle-1 font-weight-bold"
        @click="$store.commit('changeFilterDialogStatus')"
      >Filter</v-btn>
      <v-col
        :class="['meal_container col-12 col-md-9 pa-0 d-flex flex-wrap justify-space-around', $vuetify.breakpoint.mdAndUp ? 'full_height' : '']"
      >
        <div
          v-for="(meal, index) in $store.state.meals"
          :key="`meal${index}`"
          class="meal px-3 pb-6"
        >
          <v-card outlined class="elevation-2" max-width="300">
            <v-img :src="meal.strMealThumb" :lazy-src="meal.strMealThumb" width="260" height="210">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="subtitle-1 font-weight-bold text-center px-2 py-3">{{meal.strMeal}}</p>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-dialog max-width="500" v-model="$store.state.showFilterDialog">
      <v-card class="pa-3">
        <p class="title font-weight-bold mb-0">Filter by:</p>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#main_page {
  @media (min-width: 960px) {
    .full_height {
      max-height: calc(100vh - 80px);
    }
  }

  .meal_container {
    .meal .v-card {
      cursor: pointer;

      .v-image .v-image__image--cover {
        transition-duration: 0.3s;
      }

      &:hover {
        .v-image .v-image__image--cover {
          transform: scale(1.1);
        }
      }
    }

    &::after {
      content: "";
      flex: auto;
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