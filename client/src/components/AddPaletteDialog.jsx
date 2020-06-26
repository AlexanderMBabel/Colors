import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { FaWindowClose } from 'react-icons/fa';

import Picker from 'emoji-picker-react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from '../styles/AddPaletteDialog.styles.js';

const AddPaletteDialog = ({ onSubmit, onClose, open, paletteNames }) => {
  const [paletteName, setPaletteName] = useState('');
  const [emoji, setEmoji] = useState({
    unified: '1f3a8',
    emoji: '🎨',
    originalUnified: '1f3a8',
    names: ['artist palette', 'art'],
  });
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
  const handleSubmit = () => {
    let paletteInfo = {
      paletteName,
      id: sanitizeName(paletteName),
      emoji: emoji.emoji,
    };
    onSubmit(paletteInfo);
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
      <div className={classes.top}>
        <DialogTitle className={classes.title} id='dialog-title'>
          Save Palette
        </DialogTitle>
        <IconButton onClick={onClose}>
          <FaWindowClose />
        </IconButton>
      </div>
      <ValidatorForm onSubmit={handleSubmit} className={classes.form}>
        <TextValidator
          helperText='Give your palette a unique name.'
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
        <p className={classes.symbolText}>Select a symbol for your palette</p>
        <Picker onEmojiClick={onEmojiClick} />
        <Button
          type='submit'
          variant='outlined'
          color='primary'
          className={classes.submitBtn}>
          Save
        </Button>
      </ValidatorForm>
    </Dialog>
  );
};

export default AddPaletteDialog;
