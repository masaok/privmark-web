import { Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
    },
  }),
  { name: 'Companies' }
)

export const Companies = props => {
  const classes = useStyles(props)

  return <div className={classes.root}>COMPANIES</div>
}
