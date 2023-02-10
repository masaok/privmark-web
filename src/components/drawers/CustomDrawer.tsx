/**
 * Drawer Inside Container Element
 * https://github.com/mui/material-ui/issues/11749#issuecomment-452987953
 */

import { Drawer, makeStyles } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
    },
  }),
  { name: 'CustomDrawer' }
)

const CustomDrawer = (props: any) => {
  const classes = useStyles(props)

  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <div id="drawer-container" style={{ position: 'relative' }}>
        <span>
          CONTAINERS
          <button onClick={() => setOpen(true)}>Open Drawer</button>
        </span>
      </div>
      <Drawer
        open={open}
        onClose={() => {}}
        PaperProps={{ style: { position: 'absolute' } }}
        BackdropProps={{ style: { position: 'absolute' } }}
        ModalProps={{
          container: document.getElementById('drawer-container'),
          style: { position: 'absolute' },
        }}
        variant="temporary"
      >
        <button onClick={() => setOpen(false)}>Close Drawer</button>
        <span>Some elements</span>
      </Drawer>
    </div>
  )
}

export default CustomDrawer
