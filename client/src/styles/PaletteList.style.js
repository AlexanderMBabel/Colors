export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  paletteList: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColfor: 'blue',
    backgroundImage: 'url(Tumbleweed.jpg)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    overflowY: 'scroll',
    overflowX: 'hidden',
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
