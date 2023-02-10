import { createTheme, createTheme as createThemeV4 } from '@material-ui/core/styles'
import { createTheme as createThemeV5 } from '@mui/material/styles'
import { DARK_GRAY, DARK_GRAY_TEXT, VERY_LIGHT_BACKGROUND_GRAY, VERY_LIGHT_GRAY } from './colors'

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

// Using MUI v4 with v5
// https://mui.com/x/react-data-grid/migration-v4/#using-mui-core-v4-with-v5
export const themeV4 = createThemeV4({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
})

export const themeV5 = createThemeV5({
  palette: {
    primary: {
      main: themeV4.palette.primary.main,
    },
  },
})

export const customTheme = {
  text: '#556880',
  border: {
    // main: '#DFE1E3',
    main: '1px solid #DFE1E3',
  },
  divider: {
    color: '#8493A3',
  },
  navBar: {
    light: SLIGHTLY_GRAY,
  },
  sidebar: {
    color: VERY_LIGHT_GRAY,
    backgroundColor: DARK_GRAY,
  },
  content: {
    color: DARK_GRAY_TEXT,
    backgroundColor: VERY_LIGHT_BACKGROUND_GRAY,
  },
}

export default theme
