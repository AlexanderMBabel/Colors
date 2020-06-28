import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import { Delete } from '@material-ui/icons';

import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/NewColorBox.styles.js';

const NewColorBox = SortableElement(({ classes, color, remove }) => {
  const handleRemove = () => {
    remove(color.color);
  };
  return (
    <div className={classes.colorBox}>
      <div className={classes.info}>
        <div className={classes.name}>{color.name}</div>
        <IconButton
          className={classes.remove}
          onClick={handleRemove}
          aria-label='Remove'>
          <Delete />
        </IconButton>
        {/* <FaTrashAlt onClick={handleRemove} className={classes.remove} /> */}
      </div>
    </div>
  );
});

export default withStyles(styles)(NewColorBox);
