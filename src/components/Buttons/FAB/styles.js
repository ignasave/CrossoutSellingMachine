import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    fabe: {
        bottom: theme.spacing(9),
        right: theme.spacing(3),
        position: 'fixed',
    },
    fab: {
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        position: 'fixed',
    },
}))