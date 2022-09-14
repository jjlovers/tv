<template>
  <div class="p-error">
    <div>
      {{ error.statusCode }}
    </div>

    <div class="mt30">
      <v-btn color="warning" @click="$router.go(-1)">بازگشت</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',

  layout: 'flat',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  head() {
    return {
      title: `${this.title}`
    }
  },

  data() {
    return {
      title: 'خطای سایت'
    }
  }
}
</script>
