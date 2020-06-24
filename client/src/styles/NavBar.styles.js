export default {
  NavBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
  },
  logo: {
    fontFamily: 'Poppins',
    fontSize: 18,
    background: 'rgb(49,49,49)',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'rgb(194,194,194)',
      padding: '0 10px',
      fontWeight: 'bold',
      fontSize: 18,
    },
  },
  sliderContainer: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    width: 350,
  },
  slider: {
    width: 340,
    margin: '0 10px',
    display: 'inline-block',
  },
  levelContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Poppins',
  },
  level: {
    fontSize: 14,
    paddingLeft: 4,
  },
  rightSide: {
    marginRight: '1rem',
  },
};
