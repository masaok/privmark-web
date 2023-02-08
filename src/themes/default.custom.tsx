/**
 * Trying out custom properties on themes shown here:
 * https://github.com/mui/material-ui/issues/17544#issuecomment-858196243
 * (but it doesn't work due to primary not being a valid property of Theme)
 */
import { createTheme, createTheme as createThemeV4 } from '@material-ui/core/styles'
import { createTheme as createThemeV5 } from '@mui/material/styles'

const LIGHT_BLUE = '#42a5f5'
const SLIGHTLY_LIGHT_BLUE = '#2686e7'

const SLIGHTLY_GRAY = '#F6F8FA'

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

    // navBar: {
    //   light: SLIGHTLY_GRAY,
    // },
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

export const themeV4Options = {
  palette: {
    primary: {
      main: '#2196f3',
      text: '#556880',
    },

    border: {
      // main: '#DFE1E3',
      main: '1px solid #DFE1E3',
    },

    // text: {
    //   main: '#556880',
    // },
  },
}
export const themeV4 = createThemeV4(themeV4Options)

export const themeV5 = createThemeV5({
  palette: {
    primary: {
      main: themeV4.palette.primary.main,
    },
  },
})

type CustomTheme = {
  [Key in keyof typeof themeV4Options]: typeof themeV4Options[Key]
}

declare module '@material-ui/core/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}

  interface Palette {
    // neutral: Palette['primary']
  }
  interface PaletteOptions {
    // neutral: PaletteOptions['primary']
  }
}

export default theme
