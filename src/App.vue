<template>
  <div id="app">
    <v-app>
      <!-- Navigation -->
      <v-app-bar app>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            Hospital App
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <template v-for="item in menuItems">
            <v-btn text :key="item.title" :to="item.path" v-if="item.isVisible">
              {{ item.title }}
            </v-btn>
          </template>
        </v-toolbar-items>
      </v-app-bar>

      <!-- Current page view -->
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/getIsAuthenticated",
    }),
    menuItems() {
      return [
        {
          title: "Dashboard",
          path: "/dashboard",
          isVisible: this.isAuthenticated,
        },
        {
          title: "Log out",
          path: "/logout",
          isVisible: this.isAuthenticated,
        },
      ];
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
