import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import { fontColorHelper } from '../utils/fontColorHelper';
import { randomColor } from '../utils/randomColor';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import NewColorBox from './NewColorBox';
import AddPaletteDialog from './AddPaletteDialog';
import { Link } from 'react-router-dom';
import useStyles from '../styles/AddPaletteForm.styles.js';

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      open: true,
      pickedColor: '#ffffff',
      colorName: '',
      palette: [],
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isNameUnique', (value) => {
      let index = this.state.palette.findIndex(
        (paletteColor) => paletteColor.name === value
      );
      if (index === -1) {
        return true;
      }
      return false;
    });
    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      let index = this.state.palette.findIndex(
        (paletteColor) => paletteColor.color === this.state.pickedColor
      );
      if (index === -1) {
        return true;
      }
      return false;
    });
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleColorPick = (color) => {
    this.setState({ pickedColor: color.hex });
  };
  addToPalette = () => {
    const newColor = {
      color: this.state.pickedColor,
      name: this.state.colorName,
    };
    this.setState((prevState) => ({
      palette: [...prevState.palette, newColor],
      colorName: '',
      pickedColor: '#ffffff',
    }));
  };
  pickRandomColor = () => {
    this.setState({
      pickedColor: randomColor(),
    });
  };
  clearPalette = () => {
    this.setState({
      palette: [],
    });
  };
  handleNameChange = (e) => {
    this.setState({
      colorName: e.target.value,
    });
  };
  removeFromPalette = (color) => {
    let palette = [...this.state.palette];
    let index = palette.findIndex((colorInfo) => colorInfo.color === color);
    palette.pop(index);
    this.setState({
      palette,
    });
  };
  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  };
  handleDialogClose = (paletteInfo) => {
    this.props.savePalette({
      ...paletteInfo,
      colors: this.state.palette,
    });
    this.setState({
      dialogOpen: false,
    });
  };
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar>
            <IconButton
              color='secondary'
              aria-label='open drawer'
              onClick={this.handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <div className={classes.appBarContainer}>
              <h3>Create A Palette</h3>
              <section>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.btn}>
                  <Link className={classes.link} to='/'>
                    Go Back
                  </Link>
                </Button>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={this.handleDialogOpen}>
                  Save Palette
                </Button>
              </section>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContent}>
            <h3>Design Your Palette</h3>
            <div className={classes.buttonContainer}>
              <Button
                onClick={this.clearPalette}
                size='small'
                variant='outlined'
                color='primary'
                className={classes.btn}>
                Clear
              </Button>
              <Button
                onClick={this.pickRandomColor}
                size='small'
                variant='outlined'
                color='secondary'
                className={classes.btn}>
                Random
              </Button>
            </div>
            <ChromePicker
              color={this.state.pickedColor}
              onChangeComplete={this.handleColorPick}
            />
            <ValidatorForm
              className={classes.form}
              onSubmit={this.addToPalette}>
              <TextValidator
                value={this.state.colorName}
                onChange={this.handleNameChange}
                validators={['required', 'isNameUnique', 'isColorUnique']}
                errorMessages={[
                  'Color name required',
                  'Color Name is already in palette',
                  'Color is already in palette',
                ]}
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={this.state.palette.length > 19 ? true : false}
                style={{
                  backgroundColor: this.state.pickedColor,
                  color: fontColorHelper(this.state.pickedColor),
                  marginTop: 10,
                }}>
                Add Color
              </Button>
              <div
                hidden={this.state.palette.length > 19 ? false : true}
                className={classes.isFull}>
                The Palette is Full
              </div>
            </ValidatorForm>
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
          <AddPaletteDialog
            paletteNames={this.props.paletteNames}
            open={this.state.dialogOpen}
            onClose={this.handleDialogClose}
          />
          <div className={classes.drawerHeader} />
          <div className={classes.colors}>
            {this.state.palette.map((color, index) => (
              <NewColorBox
                color={color}
                key={color}
                remove={this.removeFromPalette}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(NewPaletteForm);
