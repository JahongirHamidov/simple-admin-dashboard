import React,{useContext} from 'react'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import { useStyles } from './useOrdersStyle'
import {GlobalState} from '../../globalState'
import Button from '@material-ui/core/Button'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import CircularProgress from '@material-ui/core/CircularProgress'

const delivered = () => { return(<><span>delivered</span></>)}

export  function Orders() {
  const classes = useStyles()
  const {users} = useContext(GlobalState) 

  return (
    <TableContainer component={Paper}>
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
            <TableCell align='left'>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users ? (users.map((user) => (
            <TableRow key={`${user.name.first} ${user.name.last}`}>
              <TableCell component="th" scope="row">
                {user.name.first}
              </TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{delivered()}</TableCell>
            </TableRow>
          ))) : <CircularProgress/>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
