import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/NavBar.css';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

import { CloseOutlined } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300 + theme.spacing(3) * 2,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      format: e.target.value,
      open: true,
    });
    this.props.changeFormat(e.target.value);
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <nav className='NavBar'>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          onClose={this.handleClose}
          message={<span id='message-id'>Format Changed!</span>}
          ContentProps={{
            'aria-describedby': 'messge-id',
          }}
          autoHideDuration={3000}
          key={'bottom-left'}
          action={
            <IconButton
              aria-label='close'
              className='snack-close'
              onClick={this.handleClose}>
              <CloseOutlined />
            </IconButton>
          }
        />
        <div className='left-side'>
          <div className='logo'>
            <a href='#'>ReactColorPicker</a>
          </div>
          <div className='slider-container'>
            <p className='level-container'>
              <span className='level-label'>level:</span>
              <span className='level'>{this.props.level}</span>
            </p>
            <PrettoSlider
              className='slider'
              value={this.props.level}
              min={100}
              max={900}
              step={100}
              onChange={this.props.changeLevel}
              aria-label='Level Slider'
            />
          </div>
        </div>
        <div className='right-side'>
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
export default NavBar;
