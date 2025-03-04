import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


export const useUserStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 500,
            margin: 50,
            marginLeft: '30%',
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            justifyItems: 'center',
            justifySelf: 'center',
            alignmentBaseline: 'center'
            
        },
        main:{
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            justifyItems: 'center',
            justifySelf: 'center',
            alignmentBaseline: 'center',
            backgroundColor: '#EAEDED',
            minWidth: '100%',

        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },

}));

  