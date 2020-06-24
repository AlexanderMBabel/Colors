export default {
  paletteList: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    background: 'url(Tumbleweed.jpg)',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  },

  palettes: {
    width: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h3': {
      color: '#333333',
      fontWeight: 'semi-bold',
    },
  },
  create: {
    fontSize: 12,
    color: '#333333',
  },
};
