import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

// import { getModeFromPath } from '../common/appHelpers'

// General themes
import defaultTheme from './default.custom'
import mobileTheme from './mobile'

// Mode-specific themes
// import agency from './modes/agency'
// import interpreter from './modes/interpreter'
// import requester from './modes/requester'

type ThemeMap = {
  [key: string]: object
}

const themeMap: ThemeMap = {
  defaultTheme,
  mobileTheme,

  // Modes
  // requester,
  // interpreter,
  // agency,
}

export const ThemeContext = React.createContext((themeName: string) => {})

const getDefaultTheme = () => {
  // const mode = getModeFromPath()
  // console.info(`CUSTOM THEME PROVIDER > mode: ${mode}`)
  const mode = ''

  // TODO: Fix this warning, otherwise it shows in Jest tests
  // if (!(mode in themeMap)) console.warn(`Unknown theme mode: "${mode}" -- using default instead...`)

  return mode in themeMap ? themeMap[mode] : defaultTheme
}

const CustomThemeProvider = (props: any) => {
  // State to hold the selected theme
  const [theme, setTheme] = useState(getDefaultTheme())

  const setThemeName = (themeName: string) => {
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
