import { AppBar, makeStyles } from '@material-ui/core'
import BottomAppBar from 'mobile/components/AppBar/BottomAppBar'
import HideAppBar from 'mobile/components/AppBar/HideAppBar'
import HideAppBarDemo from 'mobile/components/AppBar/HideAppBarDemo'
import HideAppBarDemoClean from 'mobile/components/AppBar/HideAppBarDemoClean'
import { HideOnScroll } from 'mobile/components/AppBar/HideOnScroll'
import { PrimarySearchAppBar } from 'mobile/components/AppBar/PrimarySearchAppBar'
import { PrimarySearchToolbar } from 'mobile/components/AppBar/PrimarySearchToolbar'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      height: '100vh',
      width: '100vw',
      // https://stackoverflow.com/questions/45870323/does-css-grid-have-a-flex-grow-function
      gridTemplate: `
          "header" auto  /* height set by content */
          "content" 1fr
          / auto
        `,

      backgroundColor: '#EEE',
    },
  }),
  { name: 'MobileDashboard' }
)

export const MobileDashboard = (props: any) => {
  const classes = useStyles(props)

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, zIndex: 100 }}>
        {/* <PrimarySearchAppBar /> */}
        {/* <HideAppBar>
          <PrimarySearchAppBar />
        </HideAppBar> */}
        {/* <HideAppBarDemoClean /> */}

        <HideOnScroll>
          <AppBar>
            <PrimarySearchToolbar />
          </AppBar>
        </HideOnScroll>
      </div>
      MOBILE
      <BottomAppBar />
    </div>
  )
}
