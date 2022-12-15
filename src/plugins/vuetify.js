/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          // background: '#d7dadb',
          // surface: '#58a5f0',
          primary: '#007391',
          'primary-darken-1': '#004763',
          'primary-lighten-1': '#4da2c1',
          secondary: '#007391',
          accent: '#ff5722'
          // 'secondary-darken-1': '#018786',
          // error: '#B00020',
          // info: '#2196F3',
          // success: '#4CAF50',
          // warning: '#FB8C00'
        }
      }
    }
  }
})
