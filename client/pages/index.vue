<template>
  <v-container class="mt70">
    <h3 class="h1 mb20 text-center">دسته بندی ها</h3>

    <ul class="category">
      <li v-for="item in categories" :key="item.id" class="category__item">
        <nuxt-link class="category__link" :to="`/category/${item.id}`">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',

  head() {
    return {
      title: this.title
    }
  },

  data() {
    return {
      title: 'صفحه اصلی'
    }
  },

  computed: {
    ...mapGetters({
      categories: 'getCategories'
    })
  },

  mounted() {
    this.readCategories()
  },

  methods: {
    ...mapActions(['readCategories'])
  }
}
</script>

<style src="./style.scss" lang="scss" />
