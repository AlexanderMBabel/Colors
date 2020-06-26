import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPalette.styles';

function MiniPalette(props) {
  const { classes } = props;
  const { paletteName, emoji, colors, id } = props.palette;

  return (
    <Link to={`/palette/${id}`} className={classes.container}>
      <div className={classes.colors}>
        {colors.map((color) => (
          <div
            key={color.name}
            style={{ backgroundColor: color.color }}
            className={classes.color}></div>
        ))}
      </div>
      <footer className={classes.footer}>
        <p>{paletteName}</p>
        <p>{emoji}</p>
      </footer>
    </Link>
  );
}
export default withStyles(styles)(MiniPalette);
