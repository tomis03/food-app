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
  data: () => ({}),
  components: {
    NavBar: () => import("@/components/NavBar.vue"),
    SideMenu: () => import("@/components/SideMenu.vue")
  },
  mounted() {
    for (let i = 0; i <= 9; i++) {
      this.$axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => {
          this.$store.commit("addMeal", res.data.meals[0]);
        });
    }
  }
};
</script>

<style lang="scss">
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
