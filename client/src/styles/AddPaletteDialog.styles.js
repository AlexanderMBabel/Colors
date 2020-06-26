import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 200,
  },
  form: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    margin: 20,
  },
  symbol: {
    fontSize: 24,
  },
});
