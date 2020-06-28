export default {
  container: {
    borderRadius: 5,
    padding: 7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 150,
    boxShadow: '0 1px 5px rgba(33,33,40,0.6)',
    margin: 20,

    background: 'white',
    position: 'relative',
    cursor: 'pointer',
    '&:hover section': {
      opacity: '1',
    },
  },
  link: {
    textDecoration: 'none',
    width: '100%',
    height: '100%',
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

    fontSize: 14,
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
  remove: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'rgba(240,10,0,0.7)',
    color: '#cccccc',
    opacity: 0,
    padding: 10,
    zIndex: 20,
    transition: 'all 0.5s ease-in-out',
    '& :hover': {
      filter: 'brightness(1.4)',
      // color: 'white',
    },
  },
};
