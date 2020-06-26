import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Picker from 'emoji-picker-react';
import { useStyles } from '../styles/AddPaletteDialog.styles.js';

const AddPaletteDialog = ({ onClose, open }) => {
  const [paletteName, setPaletteName] = useState('');
  const [emoji, setEmoji] = useState(null);
  const classes = useStyles();
  const sanitizeName = (name) => {
    return name.toLowerCase().replace(' ', '-');
  };
  const handleClose = () => {
    let paletteInfo = {
      paletteName,
      id: sanitizeName(paletteName),
      emoji: emoji.emoji,
    };
    onClose(paletteInfo);
  };
  const onEmojiClick = (e, emojiObject) => {
    setEmoji(emojiObject);
  };
  return (
    <Dialog
      aria-labelledby='dialog-title'
      open={open}
      className={classes.container}>
      <DialogTitle className={classes.title} id='dialog-title'>
        Save Palette
      </DialogTitle>
      <form onSubmit={handleClose} className={classes.form}>
        <TextField
          required
          label='Palette Name'
          defaultValue='My Palette Name'
          type='text'
          value={paletteName}
          onChange={(e) => setPaletteName(e.target.value)}
          className={classes.name}
        />
        <p className={classes.symbol}>{emoji && emoji.emoji}</p>
        <Picker onEmojiClick={onEmojiClick} />
        <Button
          onClick={handleClose}
          variant='outlined'
          color='primary'
          className={classes.name}>
          Save
        </Button>
      </form>
    </Dialog>
  );
};

export default AddPaletteDialog;
