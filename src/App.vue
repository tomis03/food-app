<template>
  <v-app>
    <NavBar />
    <SideMenu />
    <v-content>
      <v-container class="full_height">
        <vue-page-transition name="fade" class="full_height">
          <router-view />
        </vue-page-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/NavBar.vue"),
    SideMenu: () => import("@/components/SideMenu.vue")
  }
};
</script>

<style lang="scss">
.overflow-y-hidden {
  overflow-y: hidden;
}

.v-dialog {
  .v-btn {
    text-transform: none;
  }
}

.v-application {
  .v-application--wrap {
    p {
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    .full_height {
      height: 100%;
    }

    .v-btn {
      text-transform: none;
    }

    .v-toolbar__content {
      padding: 0;
    }

    .container {
      max-width: 1185px;
    }
  }
}
</style>
