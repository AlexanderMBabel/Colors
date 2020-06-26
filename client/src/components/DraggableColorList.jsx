import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import NewColorBox from './NewColorBox';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
};
const DraggableColorList = SortableContainer(({ colors, remove, classes }) => {
  return (
    <div className={classes.container}>
      {colors.map((color, i) => (
        <NewColorBox index={i} color={color} key={color.name} remove={remove} />
      ))}
    </div>
  );
});

export default withStyles(styles)(DraggableColorList);
