import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'

import { customTheme } from 'themes/default'
import { DashboardContent } from './DashboardContent'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      width: '100%',
      // height: '100vh',
      // width: '100vw',
      // https://stackoverflow.com/questions/45870323/does-css-grid-have-a-flex-grow-function
      gridTemplate: `
        "sidebar content" auto  /* height set by content */
        / auto 1fr
      `,

      backgroundColor: '#EEE',
    },

    // Grid Panels
    gridPanel: {
      // padding: theme.spacing(1),
    },

    sidebarGrid: {
      gridArea: 'sidebar',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingLeft: '1rem',
      paddingRight: '1rem',

      color: customTheme.sidebar.color,
      backgroundColor: customTheme.sidebar.backgroundColor,

      overflowY: 'auto',
    },

    contentGrid: {
      gridArea: 'content',
      display: 'flex',
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      // justifyContent: 'center',  // causes content to shift right when shrinking screen width
      overflowY: 'auto',

      backgroundColor: customTheme.content.backgroundColor,
    },

    // Sidebar
    sidebarDivider: {
      width: '100%',
      height: 1,
      border: 1,
      // background: 'black',
      color: customTheme.divider.color,
      backgroundColor: customTheme.divider.color,
    },

    sidebarIcon: {
      color: customTheme.sidebar.color,
    },
  }),
  { name: 'DashboardHome' }
)

export const DashboardHome = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={clsx(classes.gridPanel, classes.sidebarGrid)}>
        <List key={1}>
          <ListItem button>
            <ListItemIcon className={classes.sidebarIcon}>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Hide Sidebar" />
          </ListItem>
        </List>
        <Divider className={classes.sidebarDivider} variant="fullWidth" />
        <List key={2}>
          {[
            'Companies',
            'Market Analysis',
            'Investors',
            'Limited Partners',
            'Funds',
            'Debt & Lenders',
            'Service Providers',
            'People',
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.sidebarIcon}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.sidebarDivider} variant="fullWidth" />
        <List key={3}>
          {['Library', 'Research Center', 'News'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.sidebarIcon}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.sidebarDivider} variant="fullWidth" />
        <List key={4}>
          {[
            'Workspaces',
            'Alerts & Subscriptions',
            'Saved Searches & Lists',
            'History',
            'Test',
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.sidebarIcon}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={clsx(classes.gridPanel, classes.contentGrid)}>
        <DashboardContent />
      </div>
    </div>
  )
}
