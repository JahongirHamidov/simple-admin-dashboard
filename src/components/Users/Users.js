import React,{useContext} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import {useUserStyles} from './UsersStyles'
import {GlobalState} from '../../globalState'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'


  const pending = () => {return(<><span>pending</span></>)}
  const delivered = () => { return(<><span>delivered</span></>)}
  const refunded = () => { return(<><span>refunded</span></>)}
  


export  function Users() {
    const classes = useUserStyles()
    const {users} = useContext(GlobalState)
    console.log(users)
    return (
        <div className={classes.main}>
                 <TableContainer component={Paper} elevation={3}>
                    <Table className={classes.table} aria-label="caption table">
                        <caption>
                            <Button color='primary' edge='end'>View all <NavigateNextIcon/></Button>
                        </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.head}>
                                    <span>
                                        <b>
                                            Latest Orders
                                        </b>
                                    </span>
                                </TableCell>
                                <TableCell/>
                                <TableCell/>
                                <TableCell>
                                    <Button color='primary' variant='outlined' size='small'>
                                        <span>
                                            New entry
                                        </span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        <TableRow>
                            <TableCell align='left'>Customer</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {users.map((user) => (
                            <Link key={user.name.first} className={classes.link} to={{pathname: '/users/user', state: user}}>
                                <TableRow key={user.name.first}>
                                    <TableCell component="th" scope="row" className={classes.name}>
                                    <Avatar src={user.picture.medium}/>  {` ${user.name.title}. ${user.name.last} ${user.name.first} `}
                                    </TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="right">{user.phone}</TableCell>
                                    <TableCell align="right">{delivered()}</TableCell>
                                </TableRow>
                            </Link>
                        
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}
