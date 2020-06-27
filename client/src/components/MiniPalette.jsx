import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPalette.styles';
import { FaTrash } from 'react-icons/fa';

function MiniPalette({ classes, palette, removePalettes }) {
  const { paletteName, emoji, colors, id } = palette;
  const handleRemove = () => {
    removePalettes(id);
  };
  return (
    <div className={classes.container}>
      <Link to={`/palette/${id}`} className={classes.link}>
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
      <section
        className='remove'
        className={classes.remove}
        onClick={handleRemove}>
        <FaTrash />
      </section>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
