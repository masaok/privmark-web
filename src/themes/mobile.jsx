import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'light',

    // Override main colors here (Buttons, etc.)
    // primary: {
    //   main: '#175A6B', // dark turqoise
    //   light: '#3DA1B5', // blue turqoise
    //   dark: '#002d52', // dark blue
    // },

    secondary: {
      main: '#55B89F', // green turqoise
      light: '#E8CC8D', // beige
    },
  },

  typography: {
    // Set global fonts here
    // https://material-ui.com/customization/typography/#font-family

    // Default font
    fontFamily: ['Open Sans', 'sans-serif'].join(','),

    // Title fonts
    h1: {
      fontSize: '2rem',
    },

    h2: {
      fontSize: '1.75rem',
    },

    h3: {
      fontSize: '1.5rem',
    },

    h4: {
      fontSize: '1.25rem',
    },

    h5: {
      fontSize: '1rem',
    },
  },
})

export default theme
