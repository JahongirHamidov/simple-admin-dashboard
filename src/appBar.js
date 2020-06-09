import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import {MyDrawer} from './components/drawer/Drawer'
import {useStyles} from './appBarStyle'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Users } from './components/Users/Users'
import {Switch,Route} from 'react-router-dom'
import {Products} from './components/Products/Products'
import {Account} from './components/Account/Account'
import {User} from './components/User/User'
  

export  function Appbar() {
   
      const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MyDrawer/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My App
                    </Typography>
                        <IconButton color='inherit' aria-label="notification">
                            <NotificationsNoneOutlinedIcon fontSize='large'/>
                        </IconButton>
                        <IconButton color='inherit' aria-label="log out">
                            <ExitToAppRoundedIcon fontSize='large'/>
                        </IconButton>
                    </Toolbar>

                    <Switch>
                        <Route path="/" exact>
                            <Dashboard />
                        </Route>
                        <Route path="/users" exact>
                            <Users />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/account">
                            <Account />
                        </Route>
                        <Route path='/users/user' >
                            <User />
                        </Route>
                    </Switch>
                </AppBar>
            </div>        
        </>
    )
}
