import Vue from 'vue'

// kit
import VBtn from '@kit/VBtn/VBtn'
import VContainer from '@kit/VContainer/VContainer'

import Ripple from '~/assets/directives/ripple'

/*
 * Global component registration
 ****************************/
const components = {
  VBtn,
  VContainer
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

/*
 * Global directives registration
 ****************************/
const directives = {
  Ripple
}

Object.entries(directives).forEach(([name, directive]) => {
  Vue.directive(name, directive)
})
