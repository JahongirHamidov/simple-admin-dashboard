import { makeStyles } from '@material-ui/core/styles'

export const  useAccountStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 900,
      margin: 50,
      minWidth: 300,
      padding: 20,
    },
    main: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row'
    },
    media: {
      height: 140,
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        color: 'black',
        
    },
    pos: {
        marginBottom: 12,
    },
    div: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 70
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: 20,
        width: '40ch',
    },
}))
  