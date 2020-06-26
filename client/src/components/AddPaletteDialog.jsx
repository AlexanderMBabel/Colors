import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Picker from 'emoji-picker-react';

const useStyles = makeStyles({
  container: {
    padding: 10,
  },
  form: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

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
    <Dialog aria-labelledby='dialog-title' open={open}>
      <DialogTitle id='dialog-title'>Save Palette</DialogTitle>
      <form onSubmit={handleClose}>
        <TextField
          required
          label='name'
          defaultValue='My Palette Name'
          type='text'
          value={paletteName}
          onChange={(e) => setPaletteName(e.target.value)}
        />
        <Picker onEmojiClick={onEmojiClick} />
        <Button onClick={handleClose} variant='outlined' color='primary'>
          Save
        </Button>
      </form>
    </Dialog>
  );
};

export default AddPaletteDialog;
