import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { Companies } from 'pages/companies/Companies'
import { Dashboard } from 'pages/dashboard/Dashboard'
import { DashboardHome } from 'pages/dashboard/DashboardHome'

import AppContainer from 'containers/AppContainer'

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

const App = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route path="*" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="companies" element={<Companies />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
