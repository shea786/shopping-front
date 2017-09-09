<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <form>
        <v-layout row>
          <v-flex>
            <h3>Edit Product</h3>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="name"
              label="Product Name"
              id="name"
              required
              v-model="product.name"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="price"
              label="Product Price (£)"
              id="price"
              required
              number
              v-model="product.price"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="description"
              label="Description"
              id="description"
              multi-line
              required
              v-model="product.description"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-btn
              @click="updateProduct"
              v-show="product.name && product.price && product.description"
            >Update Product</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-container>
</template>

<script>
  import swal from 'sweetalert'
  export default {
    created () {
      this.getProduct()
    },
    data () {
      return {
        product: {}
      }
    },
    methods: {
      getProduct () {
        this.$http.get('api/products/' + this.$route.params.product)
          .then(response => {
            this.product = response.body
          })
      },
      updateProduct () {
        this.$http.put('api/products/' + this.$route.params.product, this.product)
          .then(response => {
            swal('Updated', 'Your product has been updated', 'success')
            this.$router.push('/feed')
          })
      }
    }
  }
</script>

<style></style>
