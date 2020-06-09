import React from 'react'
import Paper from '@material-ui/core/Paper'
import {Orders} from '../Orders/Orders'
import {MyProducts} from '../myProducts/myProducts'
import {SmallCard} from '../smallCard/SmallCard'
import {useDashboardStyles} from './DashboardStyles'


export  function Dashboard() {
    const classes = useDashboardStyles()
    return (
        <div>
            <Paper className={classes.paper} elevation={0} >
                        <SmallCard name='BUDGET' profit='$24,000'/>
                        <SmallCard name='TOTAL USERS' profit='1,600'/>
                        <SmallCard name='TASKS PROGRESS' profit='75.5%'/>
                        <SmallCard name='TOTAL PROFIT' color="blue" profit='$23,200' />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                        <Paper><MyProducts/></Paper>
                        <Paper><Orders/></Paper>
                                                       
            </Paper>
        </div>
    )
}
