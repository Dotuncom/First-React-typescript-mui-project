

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Styles for the button's root element
          borderRadius: 20, // Example: Make all buttons more rounded
          textTransform: 'none', // Example: Disable text capitalization
        },
        containedPrimary: {
          // Styles for the primary contained button
          backgroundColor: 'navy',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkblue',
          },
        },
        outlinedSecondary: {
          // Styles for the secondary outlined button
          borderColor: 'grey',
          color: 'black',
          '&:hover': {
            borderColor: 'darkgrey',
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
  },
});

export default theme;