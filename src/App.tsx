import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { Dashboard } from 'pages/dashboard/Dashboard'

// createStyles (old) vs makeStyles (new)
// https://smartdevpreneur.com/material-ui-makestyles-usestyles-createstyles-and-withstyles-explained/
const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      // flexDirection: 'column',
      // flexGrow: 1,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'lightblue', // this works
      // overflowY: 'scroll', // required so scrollbar never disappears
    },
    loading: {},
  }),
  { name: 'App' }
)

const App = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
