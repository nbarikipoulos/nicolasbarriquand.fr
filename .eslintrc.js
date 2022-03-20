module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug-sfc/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['error', { args: 'none' }],
    'vue-pug-sfc/component-name-in-template-casing': [
      'error',
      'kebab-case',
      { 'registeredComponentsOnly': false }
    ]
  }
}
