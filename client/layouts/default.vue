<template>
  <v-app flat>
    <nuxt />
  </v-app>
</template>

<script>
import VApp from '@shared/VApp/VApp'

export default {
  name: 'DefaultLayout',

  components: { VApp },

  head() {
    return {
      titleTemplate: `پخش آنلاین فیلم و سریال | %s`
    }
  }
}
</script>
