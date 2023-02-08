import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
    },
  }),
  { name: 'DashboardHome' }
)

export const DashboardHome = props => {
  const classes = useStyles(props)

  return <div className={classes.root}>DashboardHome</div>
}
