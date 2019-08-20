import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  center: {
    marginTop: '50%',
    margin: '0 auto',
    display: 'table'
  }

}));