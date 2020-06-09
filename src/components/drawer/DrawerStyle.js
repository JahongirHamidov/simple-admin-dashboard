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
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: theme.spacing(3),
        marginLeft: 85,        
    },
    typography: {
        marginLeft: theme.spacing(10),
        
    }
  }))