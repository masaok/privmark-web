import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

// Original Theme stuff
import ThemeProvider from 'themes/CustomThemeProvider'

// Use both MUI v4 and v5 simultaneously
// https://mui.com/x/react-data-grid/migration-v4/
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles'
import { ThemeProvider as ThemeProviderV4, StylesProvider } from '@material-ui/core/styles'
import { generateClassName } from 'utils/mui'

import theme, { themeV4, themeV5 } from 'themes/default.custom'

import { CircularProgress, CssBaseline, makeStyles } from '@material-ui/core'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_CLIENT_ID } from 'utils/constants'

// createStyles (old) vs makeStyles (new)
// https://smartdevpreneur.com/material-ui-makestyles-usestyles-createstyles-and-withstyles-explained/
const useStyles = makeStyles(
  theme => ({
    loading: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  { name: 'AppContainer' }
)

const AppContainer = (props: any) => {
  const classes = useStyles(props)

  const loading = false

  return loading ? (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  ) : (
    <HelmetProvider>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProviderV4 theme={themeV4}>
          <ThemeProviderV5 theme={themeV5}>
            <ThemeProvider theme={theme}>
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <CssBaseline />
                <Helmet>
                  <title>AppContainer.jsx</title>
                </Helmet>
                <Outlet />
              </GoogleOAuthProvider>
            </ThemeProvider>
          </ThemeProviderV5>
        </ThemeProviderV4>
      </StylesProvider>
    </HelmetProvider>
  )
}

export default AppContainer
