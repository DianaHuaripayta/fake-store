import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ec407a',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0000',
    },
  },
});