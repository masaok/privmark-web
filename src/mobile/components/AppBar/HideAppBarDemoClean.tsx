import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'
import { PrimarySearchAppBar } from './PrimarySearchAppBar'
import BasicAppBar from './BasicAppBar'
import BasicToolbar from './BasicToolbar'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  //   window?: () => Window
  children: React.ReactElement
}

const HideOnScroll = (props: Props) => {
  //   const { children, window } = props
  const { children } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({ target: window ? window() : undefined })
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function HideAppBarDemoClean() {
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar>
          {/* <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar> */}
          <BasicToolbar />
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
