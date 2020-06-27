/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        google: {
          100: '#98B5F5',
          200: '#87A8F3',
          300: '#759CF1',
          400: '#648FF0',
          500: '#5383EE',
          600: '#4B76D6',
          700: '#4269BE',
          800: '#3A5CA7',
          900: '#324F8F',
        },
        github: {
          100: '#7C7F82',
          200: '#66696D',
          300: '#505458',
          400: '#3A3E43',
          500: '#24292E',
          600: '#202529',
          700: '#1D2125',
          800: '#191D20',
          900: '#16191C',
        },
        facebook: {
          100: '#8EA4D1',
          200: '#7B95C9',
          300: '#6885C1',
          400: '#5576BA',
          500: '#4267B2',
          600: '#3B5DA0',
          700: '#35528E',
          800: '#2E487D',
          900: '#283E6B',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
