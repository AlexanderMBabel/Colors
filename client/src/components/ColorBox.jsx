import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/ColorBox.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import chroma, { scale } from 'chroma-js';

const chooseColorFromLum = (color) => {
  let lumi = chroma(color).luminance();
  return lumi >= 0.2 ? '#333333' : 'white';
};

const styles = {
  container: {
    height: (props) => (props.single ? '50%' : '25%'),
    width: '20%',
    margin: 0,
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    fontFamily: 'Poppins',
    flexGrow: 1,
    backgroundColor: (props) => props.background,
  },
  name: {
    color: (props) => chooseColorFromLum(props.background),
  },
  copyBtn: {
    width: 100,
    height: 30,
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: -50,
    marginTop: -15,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.3)',
    outline: 'none',
    border: 'none',
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',

    width: '60px',
    heigth: '30px',
    lineHeight: '30px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: 14,
  },
  seeBtn: {
    color: (props) => chooseColorFromLum(props.background),
    marginLeft: -1,
    marginTop: -2,
  },
  copyMsg: {
    backgroundColor: (props) => props.background,
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0, 1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px 3px rgba(23,25,33,0.6)',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
      marginTop: '10px',
    },
  },

  showMsg: {
    opactiy: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },
  boxContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 10,
    color: 'black',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 12,
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  /** Change state then reverse it to show copy data then remove it */
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };

  /** choose the font color based on the background color */
  chooseFontColor = (color) => {
    let lum = chroma(color).luminance();
    return lum >= 0.01 ? '#333333' : 'white';
  };
  render() {
    const {
      name,
      background,
      id,
      paletteId,
      more,
      classes,
      single,
    } = this.props;

    return (
      <div className={classes.container}>
        <div className={`copy-overlay ${this.state.copied && 'show'}`}></div>
        <div
          className={`copy-msg ${classes.copyMsg} ${
            this.state.copied && 'show'
          }`}>
          <h1 className={classes.name}>copied!</h1>
          <p className={classes.name}>{background}</p>
        </div>
        <div className='button-container'>{this.props.children}</div>
        <div className='copy-container'>
          <div className={'box-content'}>
            <span className={classes.name}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <Button variant='outlined' className={classes.copyBtn}>
              Copy
            </Button>
          </CopyToClipboard>
        </div>
        {more && (
          <Link to={`/palette/${paletteId}/${id}`} className={classes.seeMore}>
            <Button className={classes.seeBtn}>More</Button>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
