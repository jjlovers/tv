<template>
  <v-container class="mt70">
    <h3 class="h1 mb20 text-center">فعلا واستا تا معلوم شه...</h3>
  </v-container>
</template>

<script>
export default {
  name: 'CategoryPage',

  head() {
    return {
      title: this.title
    }
  },

  data() {
    return {
      title: 'فیلم های این دسته‌بندی'
    }
  }
}
</script>

<style src="./style.scss" lang="scss" />
