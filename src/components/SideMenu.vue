<template>
  <v-navigation-drawer v-model="$store.state.showSideMenu" app class="py-3">
    <router-link
      v-for="(link, index) in $store.state.links"
      :key="`link${index}`"
      :to="{name: link.name}"
    >
      <v-btn
        block
        text
        large
        color="deep-orange darken-2"
        :class="['subtitle-1 font-weight-bold px-3 mb-1 side_menu_link', $route.name == link.name ? 'side_menu_link_active' : '']"
      >{{link.title}}</v-btn>
    </router-link>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.side_menu_link {
  position: relative;

  .v-btn__content {
    justify-content: flex-start;
  }
}

.side_menu_link_active::after {
  content: "";
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  background: #e64a19;
  z-index: 10;
}
</style>