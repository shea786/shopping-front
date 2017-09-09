<template>
  <v-card flat tile class="md2">
    <v-card-media src="http://cdn2.gsmarena.com/vv/pics/zte/zte-axon-7-1.jpg" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ product.name }}</h3>
        <div>£{{ product.price }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat class="orange--text">Add To Wishlist</v-btn>
      <v-btn flat class="green--text">Buy</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: [
      'product'
    ]
  }
</script>

<style>
</style>
