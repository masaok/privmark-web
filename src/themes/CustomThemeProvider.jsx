import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { getModeFromPath } from '../common/appHelpers'

// General themes
import defaultTheme from './default'
import mobileTheme from './mobile'

// Mode-specific themes
// import agency from './modes/agency'
// import interpreter from './modes/interpreter'
// import requester from './modes/requester'

const themeMap = {
  defaultTheme,
  mobileTheme,

  // Modes
  // requester,
  // interpreter,
  // agency,
}

export const ThemeContext = React.createContext(themeName => {})

const getDefaultTheme = () => {
  const mode = getModeFromPath()
  console.info(`CUSTOM THEME PROVIDER > mode: ${mode}`)

  // TODO: Fix this warning, otherwise it shows in Jest tests
  // if (!(mode in themeMap)) console.warn(`Unknown theme mode: "${mode}" -- using default instead...`)

  return mode in themeMap ? themeMap[mode] : defaultTheme
}

const CustomThemeProvider = props => {
  // State to hold the selected theme
  const [theme, setTheme] = useState(getDefaultTheme())

  const setThemeName = themeName => {
    localStorage.setItem('appTheme', themeName)
    setTheme(themeMap[themeName])
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
