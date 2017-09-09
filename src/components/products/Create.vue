<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <form>
        <v-layout row>
          <v-flex>
            <h3>Create new product</h3>
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
              @click="create"
              v-show="product.name && product.price && product.description"
            >Create Product</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-container>
</template>

<script>
  import VForm from "vuetify/src/components/VForm/VForm";

  export default {
    components: {VForm},
    data () {
      return {
        product: {
          name: '',
          price: 0,
          description: ''
        }
      }
    },
    methods: {
      create () {
        this.$http.post('api/products', this.product)
          .then(response => {
            this.$router.push('/feed')
          })
      }
    }
  }
</script>

<style></style>
