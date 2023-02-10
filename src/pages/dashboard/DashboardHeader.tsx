import { useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import { FormControl, IconButton, InputBase, InputLabel, Paper, Select } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'

import LanguageIcon from '@material-ui/icons/Language'
import SearchIcon from '@material-ui/icons/Search'
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

    // Search Bar
    searchBar: {
      display: 'flex',
      flex: 1,
    },

    // Search Select
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 150,
    },

    select: {
      padding: '0.5rem',
    },

    // Search Bar Text Field
    searchBarPaper: {
      padding: '1px 2px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },

    inputBase: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },

    input: {
      flex: 1,
    },

    iconButton: {
      padding: 10,
    },

    // Settings Icon
    settingsIcon: {
      color: customTheme.content.color,
    },
  }),
  { name: 'DashboardHeader' }
)

const DashboardHeader = (props: any) => {
  const classes = useStyles(props)
  const navigate = useNavigate()
  // const { mode } = usePathTokens()

  // const appUser = useAppUser()
  const appUser: any = {}

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
      </div>

      <div className={classes.searchBar}>
        {/* Search Bar Select */}
        {/* <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">All Categories</InputLabel>
          <Select
            style={{
              padding: 0,
            }}
            classes={{
              root: classes.select,
            }}
            autoWidth={true}
            label="All Categories"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}

        {/* Search Bar Text Field */}
        <Paper component="form" className={classes.searchBarPaper}>
          <InputBase
            className={classes.inputBase}
            placeholder="Search Private Market Data"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      {/* Settings and Avatar */}
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
