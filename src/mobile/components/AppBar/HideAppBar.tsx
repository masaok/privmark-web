import { forwardRef, ReactElement } from 'react'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import Slide from '@material-ui/core/Slide'

interface Props {
  children: ReactElement
}

const HideOnScroll = (props: Props) => {
  const { children } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger()

  console.log('trigger', trigger)

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function HideAppBar(props: Props) {
  const { children } = props
  return <HideOnScroll {...props}>{children}</HideOnScroll>
}
