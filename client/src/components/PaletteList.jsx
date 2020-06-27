import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteList.style';
import '../styles/PaletteList.css';

class PaletteList extends Component {
  render() {
    const { palettes, classes, removePalettes } = this.props;

    return (
      <div className={classes.paletteList}>
        <header className={classes.header}>
          <h3>React Colors</h3>
          <Link className={classes.create} to='/new'>
            Create Palette
          </Link>
        </header>

        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              palette={palette}
              removePalettes={removePalettes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
