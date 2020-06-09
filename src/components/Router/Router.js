import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DashboardIcon from '@material-ui/icons/Dashboard'
import GroupIcon from '@material-ui/icons/Group'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import { Link } from 'react-router-dom'
import { useRouterStyles } from './RouterStyles'


export  function Router() {
    const classes = useRouterStyles()
    return (
            <>
                <List>
                    <Link className={classes.title}  to='/' exact>
                        <ListItem button key='Dashboard'>
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Dashboard'/>
                        </ListItem>
                    </Link>  
                    <Link className={classes.title}  to='/users'>
                        <ListItem button key='Users'>
                            <ListItemIcon>
                                <GroupIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Users'/>
                        </ListItem>
                    </Link>
                    <Link className={classes.title}  to='products'>
                        <ListItem button key='Products'>
                            <ListItemIcon> 
                                <LocalGroceryStoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Products'/>
                        </ListItem>
                    </Link>
                    <Link className={classes.title}  to='account'>
                        <ListItem button key='Account'>
                            <ListItemIcon>
                                <AccountBoxIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Account'/>
                        </ListItem>
                    </Link>
                </List>


            </>        
    )
}
