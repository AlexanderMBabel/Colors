import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FaTrashAlt } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
const styles = {
  colorBox: {
    background: (props) => props.color,
    width: '20%',
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const NewColorBox = ({ classes }) => {
  return (
    <div className={classes.colorBox}>
      <div className={classes.info}>
        <div className={classes.name}></div>
        <IconButton className={classes.remove}>
          <FaTrashAlt />
        </IconButton>
      </div>
    </div>
  );
};

export default withStyles(styles)(NewColorBox);
