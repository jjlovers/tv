module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-useless-catch': 'off',

    'nuxt/no-cjs-in-config': 'off',

    'vue/no-v-html': 'off',
    'vue/valid-template-root': 'off',
    'vue/require-prop-types': 'off',
    'vue/valid-v-slot': 'off',
    'vue/order-in-components': 'off',
    'vue/require-component-is': 'off'
  }
}
