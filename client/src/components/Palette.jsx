import React, { Component } from 'react';
import ColorBox from './ColorBox';

import '../styles/Palette.css';
import NavBar from './NavBar';

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
        <NavBar level={this.state.level} changeLevel={this.changeLevel} />
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* Footer here  */}
      </div>
    );
  }
}

export default Palette;
