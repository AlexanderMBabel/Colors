import { fontColorHelper } from '../utils/fontColorHelper';
import sizes from '../styles/sizes';
export default {
  colorBox: {
    background: (props) => props.color.color,
    width: '20%',
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    [sizes.down('md')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%',
    },
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: (props) => fontColorHelper(props.color.color),
    padding: 10,
  },
  remove: {
    color: (props) => fontColorHelper(props.color.color),
  },
};
