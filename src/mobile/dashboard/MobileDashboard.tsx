import { makeStyles } from '@material-ui/core'
import BottomAppBar from 'mobile/components/AppBar/BottomAppBar'
import { PrimarySearchAppBar } from 'mobile/components/AppBar/PrimarySearchAppBar'

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
        <PrimarySearchAppBar />
      </div>
      MOBILE
      <BottomAppBar />
    </div>
  )
}
