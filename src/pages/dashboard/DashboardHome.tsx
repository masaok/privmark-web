import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
    },
  }),
  { name: 'DashboardHome' }
)

export const DashboardHome = (props: any) => {
  const classes = useStyles(props)

  return <div className={classes.root}>DashboardHome</div>
}
