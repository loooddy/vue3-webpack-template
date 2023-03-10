module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // lv1
    'plugin:vue/vue3-strongly-recommended', // lv2
    // 'plugin:vue/vue3-recommended', // lv3

    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {

  }
}