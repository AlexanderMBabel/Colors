import chroma from 'chroma-js';

/** choose the font color based on the background color */
const chooseColorFromLum = (color) => {
  let lumi = chroma(color).luminance();
  return lumi >= 0.1 ? '#333333' : 'white';
};

export default {
  container: {
    height: (props) => (props.single ? '50%' : '25%'),
    width: '20%',
    margin: 0,
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    fontFamily: 'Poppins',
    flexGrow: 1,
    backgroundColor: (props) => props.background,
    '&:hover Button': {
      opacity: 1,
    },
  },
  name: {
    color: (props) => chooseColorFromLum(props.background),
  },
  copyBtn: {
    width: 100,
    height: 30,
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: -50,
    marginTop: -15,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.3)',
    outline: 'none',
    border: 'none',
    opacity: 0,
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',

    width: '60px',
    heigth: '30px',
    lineHeight: '30px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: 14,
  },
  seeBtn: {
    color: (props) => chooseColorFromLum(props.background),
    marginLeft: -1,
    marginTop: -2,
  },
  copyMsg: {
    backgroundColor: (props) => props.background,
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0, 1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px 3px rgba(23,25,33,0.6)',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
      marginTop: '10px',
    },
  },

  showMsg: {
    opactiy: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },
  boxContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 10,
    color: 'black',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  childrenContainer: {
    textAlign: 'center',
  },
};
