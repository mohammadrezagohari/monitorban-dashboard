import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        neutral: {
            100: '#D5D0DB',  // Title color
            200: '#B7B0BF',  // Secondary text color
            550: '#4D4259',  // Icon background
            600: '#373040',  // Card background
        },
        primary: {
            main: '#C480FF',  // Primary color for hover effects
        },
    },
}); 