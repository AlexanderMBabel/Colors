import sizes from './sizes.js';

// function getDrawerWidth() {
//   let width = window.innerWidth;
//   if (width < 576) {
//     return 150;
//   }
//   if (width < 992) {
//     return 225;
//   }
//   return 290;
// }

const drawerWidth = 290;

export default (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'rgba(255,250,250,0.7)',

    '& h3': {
      fontFamily: 'Poppins',
      color: 'rgba(33,33,44,0.9)',
      fontWeight: '300',
    },
    '& div': {
      marginRight: 'auto',
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    width: '100%',
  },
  appBarContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    [sizes.down('sm')]: {
      padding: 5,
    },
  },
  btn: {
    fontSize: '0.8rem',
    margin: 4,

    [sizes.down('sm')]: {
      margin: 1,
      padding: 0,
    },
  },
  title: {
    [sizes.down('sm')]: {
      fontSize: 12,
      letterSpacing: 0.2,
      margin: 0,
      padding: 0,
    },
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    padding: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    margin: 0,
    padding: 0,
  },
  colors: {
    width: '100%',
    height: 'calc(100vh - 76px)',
    display: 'flex',
    flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 12,

    overflow: 'hidden',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  isFull: {
    padding: 20,
    color: 'red',
    fontWeight: 'bold',
    letterSpacing: '3px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
});
