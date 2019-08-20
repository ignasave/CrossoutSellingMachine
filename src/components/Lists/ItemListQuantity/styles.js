import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  input: {
    marginTop: 0,
    paddingTop: 0
  },
  margin: {
    marginLeft: theme.spacing(1)
  }
}));