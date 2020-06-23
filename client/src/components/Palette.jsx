import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../styles/Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
  }
  changeLevel = (level) => {
    this.setState({ level });
  };
  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map(({ hex, name, id }) => (
      <ColorBox key={id} background={hex} name={name} />
    ));
    return (
      <div className='Palette'>
        <Slider
          className='slider'
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* Footer here  */}
      </div>
    );
  }
}

export default Palette;
