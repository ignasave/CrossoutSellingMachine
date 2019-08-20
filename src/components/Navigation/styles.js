import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    navigation: {
        boxShadow : '0px -5px 3px -5px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        position: 'fixed',
        bottom: 0,
        width: '105%',
        margin: 0, 
        padding: 0,
        left: '-5px'
    },
    link: {
        textDecoration: 'none'
    }
}))