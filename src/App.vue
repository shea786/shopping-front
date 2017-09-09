<template>
  <v-app toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      overflow
      absolute
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="indigo darken-4" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in items" :key="item.title" :to="item.url">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!this.$auth.isAuthenticated()">
        <v-btn flat to="/login">Login</v-btn>
        <v-btn flat to="/register">Register</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn flat to="/feed">Feed</v-btn>
        <v-btn flat @click="this.$auth.destroyToken">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import Login from './components/authentication/Login.vue'
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard', url: '/' },
          { title: 'About', icon: 'question_answer', url: '/about' }
        ],
        right: null
      }
    },
    created () {
      this.setAuthenticatedUser()
    },
    methods: {
      setAuthenticatedUser () {
        this.$http.get('api/user')
          .then(response => {
            this.$auth.setAuthenticatedUser(response.body)
          })
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
