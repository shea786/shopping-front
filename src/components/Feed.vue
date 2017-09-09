<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <v-layout row>
        <v-flex>
          <h5>Feed</h5>
          <v-btn to="/products/create">Create New Product</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <my-products></my-products>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
  import Products from './products/Products.vue'

  export default {
    components: {
      'my-products': Products
    }
  }
</script>

<style></style>
