import React from 'react'
import clsx from 'clsx'
import {useStyles} from './DrawerStyle'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import {Router} from '../Router/Router'


export function MyDrawer() {
    
    const classes = useStyles()

    const [state, setState] = React.useState({left: false})
    
      const toggleDrawer = (anchor, open) => (event) => {    
        setState({ ...state, [anchor]: open })
      }
    
      const list = (anchor) => (
        <div 
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick = { toggleDrawer(anchor, false) }
          onKeyDown = { toggleDrawer(anchor, false) } 
        >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        <Typography varinat='h2' className={classes.typography} component='h2' gutterBottom >SHen Zhi</Typography>
        <Typography variant='h6' className={classes.typography} component='h6' gutterBottom>Brain director</Typography>


          <Divider />

          <Router/>
          
        </div>
      )
    
    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button color='inherit' onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon/>
                </Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}


            
        </div>
    )
}
