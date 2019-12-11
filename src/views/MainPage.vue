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
        class="px-10 subtitle-1 font-weight-bold"
        @click="$store.commit('changeFilterDialogStatus')"
      >Filter</v-btn>
      <v-col :class="['col-12 col-md-9', $vuetify.breakpoint.mdAndUp ? 'full_height' : '']">2</v-col>
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