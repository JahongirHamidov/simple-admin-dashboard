import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MoneyIcon from '@material-ui/icons/Money'
import { IconButton } from '@material-ui/core'
import {Avatar} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: 10,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    bullet: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
    blue: {
        minWidth: 275,
        margin: 10,
        backgroundColor: '#3f51b5',
        color: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    avatar: {
      backgroundColor: 'pink',
      marginTop: 25, 
    }
  })
  

export const  SmallCard = (props) => {
    const classes = useStyles()
    return(
        <React.Fragment>
            <Card className={ props.color === 'blue' ? classes.blue : classes.root}>
                <CardContent>
                   
                    <Typography variant="p" component="h6">
                      {props.name}
                    <br />
                    </Typography>
                    <Typography variant='p' component='h2'>
                        {props.profit}
                    </Typography>
                </CardContent>
                <Avatar size='large' className={classes.avatar}>
                  <IconButton>
                    <MoneyIcon/>
                  </IconButton>
                </Avatar>  
            </Card>
            
        </React.Fragment>

    )  

}