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

    .meals_container,
    .favourites_container {
      .meal_title {
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .meal {
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
    }

    .meal_image {
      position: relative;

      .favourite_btn {
        position: absolute;
        bottom: 5px;
        right: 5px;
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>
