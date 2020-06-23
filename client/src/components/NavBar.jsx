import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='NavBar'>
        <div className='logo'>
          <a href='#'>ReactColorPicker</a>
        </div>
        <div className='slider-container'>
          <span className='level'>level:{this.props.level}</span>
          <Slider
            className='slider'
            defaultValue={this.props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeLevel}
          />
        </div>
      </nav>
    );
  }
}
export default NavBar;
