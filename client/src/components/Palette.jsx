import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { generatePalette } from '../utils/colorHelpers';
import '../styles/Palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(({ color, name }) => (
      <ColorBox background={color} name={name} />
    ));
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* Footer here  */}
      </div>
    );
  }
}

export default Palette;
