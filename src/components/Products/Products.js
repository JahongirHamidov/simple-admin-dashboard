import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {useProductsStyles} from './ProductsStyle'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'


function createData(name) {
    return { name }
  }
  
  const rows = [
    createData('Dropbox'),
    createData('Medium Corporation'),
    createData('Slack'),
    createData('Lyft'),
    createData('GitHub'),
  
  ]

export  function Products() {
    const classes = useProductsStyles()
    return (
        <div className={classes.main}>
            <TableContainer component={Paper} elevation={0}>
                <Table className={classes.table} aria-label="caption table">
                    <caption>
                        <Button color='primary'>View all <NavigateNextIcon/></Button>
                    </caption>
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}><b>Latest Products</b></TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                            <IconButton>
                                <MoreVertIcon/>
                            </IconButton>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
