import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FaTrashAlt } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import { fontColorHelper } from '../utils/fontColorHelper';
import { SortableElement } from 'react-sortable-hoc';
const styles = {
  colorBox: {
    background: (props) => props.color.color,
    width: '20%',
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
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

const NewColorBox = SortableElement(({ classes, color, remove }) => {
  const handleRemove = () => {
    remove(color.color);
  };
  return (
    <div className={classes.colorBox}>
      <div className={classes.info}>
        <div className={classes.name}>{color.name}</div>
        <IconButton className={classes.remove} onClick={handleRemove}>
          <FaTrashAlt />
        </IconButton>
      </div>
    </div>
  );
});

export default withStyles(styles)(NewColorBox);
