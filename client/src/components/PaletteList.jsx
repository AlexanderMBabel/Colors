import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    console.log(palettes);
    return (
      <div>
        <h1>React Colors</h1>
        <div>
          {palettes.map((palette) => (
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          ))}
        </div>
      </div>
    );
  }
}

export default PaletteList;
