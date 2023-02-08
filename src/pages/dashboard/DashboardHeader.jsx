import { useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'

import LanguageIcon from '@material-ui/icons/Language'
import SettingsIcon from '@material-ui/icons/Settings'

import NavBarButtonMenu from 'components/navigation/NavBarButtonMenu'
import StatusTooltipWrapper from 'components/debug/StatusTooltipWrapper'
import { themeV4 } from 'themes/default.custom'
import { customTheme } from 'themes/default'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      minWidth: '100%',
      justifyContent: 'center',

      backgroundColor: customTheme.navBar.light,
      color: '#EEE',

      padding: theme.spacing(1),
      // boxShadow: '0px 3px 3px #AAA', // drop shadow
      zIndex: 1, // drop shadow on top of everything else
      borderBottom: customTheme.border.main,
    },

    // Components
    navItem: {
      marginLeft: theme.spacing(0.75),
      marginRight: theme.spacing(0.75),
    },

    navButtonRoot: {
      // backgroundColor: theme.palette.navBar.light,  // not sure why this doesn't work
      backgroundColor: theme.palette.primary.main,
    },

    // Panels
    logoAndNavButtons: {
      display: 'flex',
      flex: 1,
      marginLeft: theme.spacing(5),
      alignItems: 'center',
    },

    settingsAndAvatar: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      marginRight: theme.spacing(5),
      alignItems: 'center',
    },

    // Business Logo and Name
    businessLogoAndName: {
      display: 'flex',
      alignItems: 'center',
      color: customTheme.text,
    },

    businessName: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
      whiteSpace: 'nowrap',
    },

    // Settings Icon
    settingsIcon: {
      color: '#EEE',
    },
  }),
  { name: 'DashboardHeader' }
)

const DashboardHeader = props => {
  const classes = useStyles(props)
  const navigate = useNavigate()
  // const { mode } = usePathTokens()

  // const appUser = useAppUser()
  const appUser = {}

  // console.log('DashboardHeader > APP USER: ', appUser)

  // const handleLogout = async () => {
  //   try {
  //     const response = await logout()
  //     navigate(`/${mode}/login`)
  //   } catch (err) {
  //     console.trace(err)
  //   }
  // }

  return (
    <div className={classes.root}>
      <div className={classes.logoAndNavButtons}>
        <div className={clsx(classes.navItem, classes.businessLogoAndName)}>
          <StatusTooltipWrapper>
            <LanguageIcon />
          </StatusTooltipWrapper>

          <div className={classes.businessName}>Private Market Data</div>
        </div>

        {/* Dashboard Button */}
        <Button
          className={clsx(classes.navItem, classes.button)}
          classes={{
            root: classes.navButtonRoot,
          }}
          variant="contained"
          color="primary"
          size="small"
          disableElevation
          onClick={() => navigate('/')}
        >
          Dashboard
        </Button>

        <div className={classes.navItem}>
          <NavBarButtonMenu buttonText="Manage">
            <MenuItem onClick={() => navigate('/')}>Requests</MenuItem>
            <MenuItem onClick={() => navigate('/companies')}>Companies</MenuItem>
          </NavBarButtonMenu>
        </div>

        <div className={classes.navItem}>
          <NavBarButtonMenu buttonText="Financials">
            <MenuItem>Search</MenuItem>
            <MenuItem>New Job</MenuItem>
          </NavBarButtonMenu>
        </div>

        <div className={classes.navItem}>
          <NavBarButtonMenu buttonText="Reports">
            <MenuItem>Search</MenuItem>
            <MenuItem>New Job</MenuItem>
          </NavBarButtonMenu>
        </div>
      </div>
      <div className={classes.settingsAndAvatar}>
        <div className={classes.navItem}>
          <NavBarButtonMenu icon={<SettingsIcon className={classes.settingsIcon} />}>
            <MenuItem onClick={() => navigate('/')}>Settings</MenuItem>
          </NavBarButtonMenu>
        </div>
        <div className={classes.navItem}>
          <NavBarButtonMenu icon={<Avatar alt="Remy Sharp" src={appUser?.profileImageUrl} />}>
            <MenuItem>{appUser?.email}</MenuItem>
            <MenuItem onClick={() => {}}>Logout</MenuItem>
          </NavBarButtonMenu>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
