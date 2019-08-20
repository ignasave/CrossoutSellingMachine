import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  TyInline: {
    display: 'inline',
    color: '#4caf50'
  },
  text: {
    marginLeft: theme.spacing(1)
  },
  bottom: {
    marginBottom: 0,
    paddingBottom: 0
  }
}));
