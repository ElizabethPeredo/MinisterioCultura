/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  corePlugins: {
    preflight: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
    },
    
    extend: {
      colors: {
        "principal": "#01161e",
        "color1": "#9abfdf",
        "color2": "#ba181b",
        "txt-color1": "#33415c",
        "txt-color2": "#f2f2f2",
        "hv-color1": "#01161e",
        "hv-color2": "#01161e"
      },
           
    }
  },
  variants: {},
  plugins: [
		'postcss-import',
		'postcss-flexbugs-fixes',
		'postcss-nested',
		'postcss-custom-properties',
		'tailwindcss',
		'autoprefixer',
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold')},
        'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h5': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold')},
        'h6': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.bold')},
        'ul':{
          listStyleType: theme('listStyleType.disc'), 
          paddingLeft: theme('spacing.6')},
        'ol':{
          listStyleType: theme('listStyleType.decimal'), 
          paddingLeft: theme('spacing.6')},
        'blockquote':{
          borderLeftWidth: theme('borderWidth.8'),
          borderColor: theme('colors.color1'),
          backgroundColor: theme('colors.gray.300'),
          padding: theme('spacing.6'),
          margin: theme('spacing.6'),
        },
        'pre':{
          borderWidth: theme('borderWidth.8'),
          borderColor: theme('colors.gray.300'),
          backgroundColor: theme('colors.gray.300'),
          margin: theme('spacing.6'),
        },
      })
    })
	],
};