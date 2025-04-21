import { createTheme } from '@mui/material/styles';
// Define the ExtendedPaletteColor interface
interface ExtendedPaletteColor {
    main: string;
    light: string;       // Required property
    dark: string;        // Required property
    contrastText: string; // Required property
    [key: string]: string; // Allow additional properties
}


declare module '@mui/material/styles/createPalette' {
    interface Palette {
        neutral: ExtendedPaletteColor; // Add your custom property here
    }

    interface PaletteOptions {
        neutral: ExtendedPaletteColor; // Add your custom property here
    }
}


export const theme = createTheme({
    palette: {
        neutral: {
            main: '#F7F5FA',        // Primary neutral color
            light: '#E0D7E9',       // Light variant
            dark: '#C4B9C9',        // Dark variant
            contrastText: '#000000', // Text color for contrast
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