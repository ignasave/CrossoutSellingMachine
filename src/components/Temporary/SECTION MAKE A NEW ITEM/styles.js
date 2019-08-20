import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  center: {
    margin: '0 auto',
    display: 'table'
  },
  formControl: {
    minWidth: 206
  },
  text: {
    textDecoration: 'none',
  },
  space: {
    display: 'inline-block',
    marginTop: 30,
    paddingTop: 30
  }
}));
