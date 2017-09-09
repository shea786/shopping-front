<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <v-layout row>
        <v-flex>
          <h5>Feed</h5>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <ui>
            <li v-for="product in products">{{ product.name }}</li>
          </ui>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        products: []
      }
    },
    created () {
      this.$http.get('api/products')
        .then(response => {
          this.products = response.body
      })
    }
  }
</script>

<style></style>
