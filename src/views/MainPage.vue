<template>
  <div id="main_page" class="full_height">
    <v-row :class="['ma-0', $vuetify.breakpoint.mdAndUp ? 'full_height' : '']">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" class="elevation-1 col-12 col-md-3 full_height">
        <p class="title font-weight-bold">Filter by:</p>
        <template v-if="$store.state.filters">
          <div class="py-3" v-for="(filter, index) in $store.state.filters" :key="`filter${index}`">
            <p class="subtitle-1 font-weight-bold">{{filter.filterName}}</p>
            <v-checkbox
              hide-details
              dense
              class="mt-1"
              color="deep-orange darken-2"
              v-for="item in filter.filterItems"
              :key="`item${item}`"
              :label="`${item}`"
            >
              <template v-slot:label>
                <span class="filter_text subtitle-2 font-weight-regular">{{item}}</span>
              </template>
            </v-checkbox>
          </div>
        </template>
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
        :class="['meal_container col-12 col-md-9 pa-0', $vuetify.breakpoint.mdAndUp ? 'full_height' : '']"
      >
        <div
          v-for="(meal, index) in $store.state.meals"
          :key="`meal${index}`"
          class="meal px-3 pb-6"
        >
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

  .filter_text {
    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .meal_title {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .meal_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

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