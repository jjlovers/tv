<template>
  <div
    :class="[
      'v-container',
      {
        'v-container--small': small,
        'v-container--medium': medium,
        'v-container--fluid': fluid
      }
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VContainer',

  props: {
    medium: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style src="./VContainer.scss" lang="scss" />
