<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm4 v-for="product in products" :key="product.id" style="padding-right:5px;">
              <my-product :product="product"></my-product>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Product from './Product.vue'
  export default {
    data () {
      return {
        products: []
      }
    },
    components: {
      'my-product': Product
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
