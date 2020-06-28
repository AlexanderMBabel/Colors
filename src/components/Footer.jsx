import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& p': {
      paddingRight: 10,
      fontSize: 14,
    },
  },
});

const Footer = ({ paletteName, emoji }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>{paletteName}</p>
      <p>{emoji}</p>
    </footer>
  );
};

export default Footer;
