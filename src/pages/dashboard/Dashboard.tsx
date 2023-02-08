import { Helmet } from 'react-helmet-async'
import { Outlet, useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

import DashboardHeader from './DashboardHeader'
import { Drawer } from '@material-ui/core'

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

    // Grid Panels
    gridPanel: {
      // padding: theme.spacing(1),
    },

    headerGridPanel: {
      gridArea: 'header',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    contentGridPanel: {
      gridArea: 'content',
      display: 'flex',
      flex: 1,
      // justifyContent: 'center',  // causes content to shift right when shrinking screen width
      overflowY: 'hidden',
    },
  }),
  { name: 'Dashboard' }
)

export const Dashboard = props => {
  const classes = useStyles(props)

  const navigate = useNavigate()

  return (
    <div className={classes.root}>
      {/* Helmet is broken for some reason right now */}
      {/* TypeError: Cannot read properties of undefined (reading 'add') */}
      {/* <Helmet>
        <title>Dashboard</title>
      </Helmet> */}
      <div className={clsx(classes.gridPanel, classes.headerGridPanel)}>
        <DashboardHeader />
      </div>

      <div className={clsx(classes.gridPanel, classes.contentGridPanel)}>
        <Outlet />
      </div>
    </div>
  )
}
