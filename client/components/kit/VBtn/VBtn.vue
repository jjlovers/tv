<template>
  <button
    :is="to && tag !== 'a' ? 'nuxt-link' : tag"
    v-ripple
    :to="to"
    :class="[
      'v-btn',
      `v-btn--${color}`,
      {
        'v-btn--small': small,
        'v-btn--medium': !small && !large,
        'v-btn--large': large,
        'v-btn--outline': outline,
        'v-btn--block': block,
        'v-btn--wide': wide,
        'v-btn--disable': disabled,
        'v-btn--loading': loading,
        'v-btn--freeze': disabled || loading
      }
    ]"
    v-bind="attrs"
    :disabled="disabled || loading"
    v-on="$listeners"
  >
    <div class="v-btn__content">
      <div :class="{ invisible: loading }">
        <span class="v-btn__text">
          <slot></slot>
        </span>
      </div>

      <v-spinner :value="loading" :small="small" :large="large" class="abs-center" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'VBtn',

  props: {
    tag: {
      type: String,
      default: 'button'
    },
    to: {
      type: [String, Object],
      default: null
    },
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'primary'
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    attrs() {
      const attrs = Object.assign({}, this.$attrs)

      if (this.tag === 'a') {
        attrs.href = this.to
      } else if (this.tag === 'button') {
        attrs.type = this.type
      }

      return attrs
    }
  }
}
</script>

<style src="./VBtn.scss" lang="scss" />
