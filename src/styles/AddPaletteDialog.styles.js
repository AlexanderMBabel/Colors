import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: 'rgba(44, 44,44, 0.7)',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 200,
    color: 'rgba(44, 44,44, 0.7)',
  },
  form: {
    // margin: 10,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    margin: 20,
  },
  submitBtn: {
    margin: 20,
  },
  symbol: {
    fontSize: 24,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  symbolText: {
    color: 'rgba(44, 44,44, 0.7)',
  },
});
