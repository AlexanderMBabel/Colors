import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/ColorBox.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = {
  container: {},
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
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
    let containerStyle = {};
    single
      ? (containerStyle = { background, width: '20%', height: '50%' })
      : (containerStyle = { background, width: '20%', height: '25%' });
    return (
      <div style={containerStyle} className='ColorBox'>
        <div
          style={{ background: background }}
          className={`copy-overlay ${this.state.copied && 'show'}`}></div>
        <div className={`copy-msg ${this.state.copied && 'show'}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>
        </div>
        {more && (
          <Link to={`/palette/${paletteId}/${id}`} className='see-more'>
            <Button className='btn'>More</Button>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
