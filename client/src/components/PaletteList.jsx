import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
  paletteList: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url(Tumbleweed.jpg)',
    backgroundSize: '100%',
  },

  palettes: {
    width: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h3': {
      color: '#333333',
      fontWeight: 'semi-bold',
    },
  },
  create: {
    fontSize: 12,
    color: '#333333',
  },
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.paletteList}>
        <header className={classes.header}>
          <h3>React Colors</h3>
          <Link className={classes.create} to='/create'>
            Create Palette
          </Link>
        </header>

        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette key={palette.id} palette={palette} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
