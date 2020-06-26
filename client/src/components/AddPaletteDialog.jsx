import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Picker from 'emoji-picker-react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from '../styles/AddPaletteDialog.styles.js';

const AddPaletteDialog = ({ onClose, open, paletteNames }) => {
  const [paletteName, setPaletteName] = useState('');
  const [emoji, setEmoji] = useState(null);
  const classes = useStyles();

  /** create custom validations */
  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      if (paletteNames.indexOf(value) === -1) {
        return true;
      }
      return false;
    });
  }, [paletteNames]);

  /** format paletteName tobe suitable for an id */
  const sanitizeName = (name) => {
    return name.toLowerCase().replace(' ', '-');
  };

  /** create paletteInfo obj and pass it into onClose:in NewPaletteForm */
  const handleClose = () => {
    let paletteInfo = {
      paletteName,
      id: sanitizeName(paletteName),
      emoji: emoji.emoji,
    };
    onClose(paletteInfo);
  };

  /** Set emoji state when an emoji is clicked in Picker */
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
      <ValidatorForm onSubmit={handleClose} className={classes.form}>
        <TextValidator
          label='Palette Name'
          type='text'
          value={paletteName}
          onChange={(e) => setPaletteName(e.target.value)}
          className={classes.name}
          validators={['required', 'isPaletteNameUnique']}
          errorMessages={[
            'Palette name Required',
            'Palette name already taken',
          ]}
        />
        <p className={classes.symbol}>{emoji && emoji.emoji}</p>
        <Picker onEmojiClick={onEmojiClick} />
        <Button
          type='submit'
          variant='outlined'
          color='primary'
          className={classes.name}>
          Save
        </Button>
      </ValidatorForm>
    </Dialog>
  );
};

export default AddPaletteDialog;
