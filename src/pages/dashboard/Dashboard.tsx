import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      minHeight: '100%',
      minWidth: '100%',
      overflowY: 'scroll',
    },
  }),
  { name: 'Dashboard' }
)

export const Dashboard = props => {
  const classes = useStyles(props)

  const navigate = useNavigate()

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>HELLO</div>
    </div>
  )
}
