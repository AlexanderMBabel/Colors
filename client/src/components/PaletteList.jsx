import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteList.style';
import '../styles/PaletteList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
              <MiniPalette
                key={palette.id}
                palette={palette}
                removePalettes={removePalettes}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
