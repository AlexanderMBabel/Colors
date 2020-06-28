import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/ColorBox.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBox.styles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  /** Change stare of  copied to true for 1500ms then revert to false*/
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };

  render() {
    const { name, background, id, paletteId, more, classes } = this.props;

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
        <div className={classes.childrenContainer}>{this.props.children}</div>
        <div className='copy-container'>
          <div className={'box-content'}>
            <span className={classes.name}>{name}</span>
          </div>
          {!this.props.back && (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
              <Button variant='outlined' className={classes.copyBtn}>
                Copy
              </Button>
            </CopyToClipboard>
          )}
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
