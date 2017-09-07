<!--suppress ALL -->
<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <v-layout row>
        <v-flex>
          <h3>Login</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex>
          <v-text-field
            v-model="username"
            label="Email Address"
            required
          ></v-text-field>
          <v-text-field
            name="password"
            label="Enter your password"
            v-model="password"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-btn @click="login">Login</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    $validates: true,
    data() {
      return {
        username: '',
        e1: true,
        password: ''
      }
    },
    methods: {
      login() {
        var data = {
          client_id: 2,
          client_secret: '2drpVGs9JUvmIAR2JatnwkgJGQS4yXo3glbifrQz',
          grant_type: 'password',
          username: this.username,
          password: this.password
        }
        this.$http.post('http://api.shopping.app/oauth/token', data)
          .then(response => {
            this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
          })
      }
    }
  }
</script>

<style>

</style>
