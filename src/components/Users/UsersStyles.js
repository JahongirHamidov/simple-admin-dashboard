import { makeStyles } from '@material-ui/core/styles';


export const useUserStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    head: {
        fontSize: 20,
        marginRight: 400
    },
    main: {
        padding:50,
        backgroundColor: 'white'
    },
    name: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    link:{
      textDecoration: 'unset',
      color: 'black'
    }
  });
  