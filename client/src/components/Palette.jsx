import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';

import '../styles/Palette.css';
import NavBar from './NavBar';
import Footer from './Footer';

const styles = {
  Palette: {
    height: '100vh',
    overflow: 'hidden',
  },
  colors: {
    height: '87%',
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
  }

  changeLevel = (e, level) => {
    this.setState({ level });
  };
  changeFormat = (val) => {
    this.setState({
      format: val,
    });
  };

  render() {
    const { level } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[this.state.format]}
        name={color.name}
        id={color.id}
        paletteId={id}
        more={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <NavBar
          type='palette'
          level={this.state.level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />

        <div className={classes.colors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
        {/* Footer here  */}
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
