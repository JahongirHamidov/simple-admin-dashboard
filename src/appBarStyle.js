import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingLeft: '5%',
        paddingRight: '5%'
    }
    
  }))
