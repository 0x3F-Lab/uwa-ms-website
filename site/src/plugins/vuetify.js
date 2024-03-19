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

// this is our colour theme, add colour variables here
// usage: 
// CSS: color: var(--customColor);
// attribute: color="customColor"

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          offWhite: '#EAEAEA',
          blue: '#647DAE',
          orange: '#F08B58',
          pink: '#F19BD0',
          grey: '#474747',
        },
      },
    },
  },
})
