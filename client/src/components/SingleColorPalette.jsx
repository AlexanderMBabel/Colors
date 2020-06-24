import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import NavBar from './NavBar';
import Footer from './Footer';
import Button from '@material-ui/core/Button';

const styles = {
  SingleColorPalette: {
    height: '100vh',
    overflow: 'hidden',
  },
  palette: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  back: {
    width: '25%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
    };
  }

  changeFormat = (val) => {
    this.setState({ format: val });
  };

  /**  create array of all color levels */
  createColorLevel = (id, colors) => {
    let levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    let colorArray = levels.map((level) => {
      return colors[level].find((c) => c.id === id);
    });
    return colorArray;
  };
  render() {
    const { palette, color, classes, history } = this.props;
    const { paletteName, emoji } = palette;
    const colors = this.createColorLevel(color, palette.colors);

    return (
      <div className={classes.SingleColorPalette}>
        <NavBar type='single' changeFormat={this.changeFormat} />
        <div className={classes.palette}>
          {colors.map((color) => (
            <ColorBox
              key={color.name}
              background={color[this.state.format]}
              name={color.name}
              id={color.id}
              more={false}
              single
            />
          ))}
          <ColorBox background='white'>
            <Button variant='outlined' onClick={history.goBack}>
              Go Back
            </Button>
          </ColorBox>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
