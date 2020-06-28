import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteList.style';
import '../styles/PaletteList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Check, CloseRounded } from '@material-ui/icons';
import { teal, red } from '@material-ui/core/colors';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      id: null,
    };
  }
  openDialog = (id) => {
    this.setState({ dialogOpen: true, id });
  };
  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };
  handleRemovePalette = () => {
    this.props.removePalettes(this.state.id);
    this.setState({ dialogOpen: false });
  };
  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.paletteList}>
        <header className={classes.header}>
          <h3>React Colors</h3>
          <Link className={classes.create} to='/new'>
            Create Palette
          </Link>
        </header>

        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
              <MiniPalette
                key={palette.id}
                palette={palette}
                removePalettes={this.openDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <Dialog
          onClose={this.closeDialog}
          open={this.state.dialogOpen}
          aria-labelledby='delete-dialog-title'>
          <DialogTitle id='delete-dialog-title'>
            Delete the palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleRemovePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: teal[500], color: teal[100] }}>
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Yes</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[500], color: red[100] }}>
                  <CloseRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>No</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
