export default {
  container: {
    borderRadius: 5,
    padding: 7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 200,
    boxShadow: '0 1px 5px rgba(33,33,40,0.6)',
    margin: 20,
    textDecoration: 'none',
    background: 'white',
  },
  colors: {
    borderRadius: 5,

    width: '100%',
    height: '80%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  color: {
    width: '20%',
    height: '25%',
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    fontSize: 16,
    padding: 0,
    margin: 0,
    '& p': {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 0,
      color: '#333333',
    },
  },
};
