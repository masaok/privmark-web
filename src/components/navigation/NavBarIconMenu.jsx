import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
    },

    button: {
      cursor: 'pointer',
    },

    navItem: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },

    navButtonRoot: {
      backgroundColor: theme.palette.navBar.light,
    },
  }),
  { name: 'NavBarButtonMenu' }
)

const NavBarButtonMenu = props => {
  const classes = useStyles(props)
  const { children, buttonText } = props

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        classes={{
          root: classes.navButtonRoot,
        }}
        variant="contained"
        color="primary"
        size="small"
        disableElevation
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={1}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {children}
      </Menu>
    </div>
  )
}

export default NavBarButtonMenu
