import React, { Component } from 'react';
import ColorBox from './ColorBox';

import '../styles/Palette.css';
import NavBar from './NavBar';

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
    console.log(val);
    this.setState({
      format: val,
    });
  };
  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[this.state.format]}
        name={color.name}
      />
    ));
    return (
      <div className='Palette'>
        <NavBar
          level={this.state.level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* Footer here  */}
      </div>
    );
  }
}

export default Palette;
