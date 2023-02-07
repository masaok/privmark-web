import { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'

// Original Theme stuff
import ThemeProvider from 'themes/CustomThemeProvider'

// Use both MUI v4 and v5 simultaneously
// https://mui.com/x/react-data-grid/migration-v4/
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles'
import { ThemeProvider as ThemeProviderV4, StylesProvider } from '@material-ui/core/styles'
import { generateClassName } from 'utils/mui'

import { user } from 'utils/auth'

import theme from 'themes/default'
import { themeV4, themeV5 } from 'themes/modes/agency'

import { CircularProgress, CssBaseline, makeStyles } from '@material-ui/core'

// Contexts
import { LoginContext, UserContext, AgencyContext } from 'common/contexts'
import { getSelectedAgencyByUserId } from 'utils/api'

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
  { name: 'App' }
)

const AppContainer = props => {
  const classes = useStyles(props)

  return loading ? (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  ) : (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProviderV4 theme={themeV4}>
            <ThemeProviderV5 theme={themeV5}>
              <ThemeProvider theme={theme}>
                <LoginContext.Provider value={setAppUser}>
                  <UserContext.Provider value={appUser}>
                    <AgencyContext.Provider value={{ appAgency, setAppAgency }}>
                      <CssBaseline />
                      <Helmet>
                        <title>AppContainer.jsx</title>
                      </Helmet>
                      <Outlet />
                    </AgencyContext.Provider>
                  </UserContext.Provider>
                </LoginContext.Provider>
              </ThemeProvider>
            </ThemeProviderV5>
          </ThemeProviderV4>
        </StylesProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default AppContainer
