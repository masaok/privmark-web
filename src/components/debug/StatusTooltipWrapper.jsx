/**
 * Tooltip for version, status, and other debug info
 */
import { useState } from 'react'

import { useWindowSize } from '@react-hook/window-size'

import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

// import { API_BASE_URL, getStatus, getDatabaseStatus } from '../../utils/api'
// import { dumpLocalStorage } from '../../common/appHelpers'

const useStyles = makeStyles(
  theme => ({
    version: {
      textTransform: 'lowercase',
    },

    online: {
      fontWeight: 'bold',
      color: 'lightgreen',
    },

    offline: {
      fontWeight: 'bold',
      color: 'red',
    },
  }),
  { name: 'StatusTooltipWrapper' }
)

const StatusTooltipWrapper = props => {
  const classes = useStyles(props)

  const { children } = props

  const [width, height] = useWindowSize()

  const [isOpen, setIsOpen] = useState(false)

  const [serverIsLive, setServerIsLive] = useState(false)
  const [databaseIsLive, setDatabaseIsLive] = useState(false)

  const handleMouseEnter = async () => {
    try {
      // // Check API
      // const res = await getStatus()

      // // Check Database
      // const dbres = await getDatabaseStatus()

      // setServerIsLive(Boolean(res))
      // setDatabaseIsLive(dbres.status === 200)
      setServerIsLive(true)
      setDatabaseIsLive(true)
    } catch (err) {
      console.trace(err)
      setServerIsLive(false)
      setDatabaseIsLive(false)
    }
  }

  return (
    <Tooltip
      arrow
      disableFocusListener
      open={isOpen}
      title={
        <>
          Web URL: {window.location.href}
          <br />
          {/* API: {API_BASE_URL} */}
          <br />
          API Status:{' '}
          <span className={serverIsLive ? classes.online : classes.offline}>
            {serverIsLive ? 'ONLINE' : 'OFFLINE'}
          </span>
          <br />
          DB Status:{' '}
          <span className={databaseIsLive ? classes.online : classes.offline}>
            {databaseIsLive ? 'ONLINE' : 'OFFLINE'}
          </span>
          <br />
          w: {width} h: {height}
          <br />
          Package Version (package.json): {process.env.REACT_APP_VERSION}
          <br />
          UI Version: v22.07.26.01
          <pre>
            LocalStorage:
            {/* {JSON.stringify(dumpLocalStorage(), null, 2)} */}
          </pre>
        </>
      }
      onMouseEnter={handleMouseEnter}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </Tooltip>
  )
}

export default StatusTooltipWrapper
