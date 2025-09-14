// import { createTheme } from '@mui/material/styles';
// import { PaletteColor } from '@mui/material/styles/createPalette';

// declare module "@mui/material/styles" {
//     interface Palette {
//         // neutral: Palette['primary'];
//         neutral: Palette['primary'] //& { 550?: string };
//     }

//     interface PaletteOptions {
//         neutral?: PaletteOptions["primary"]// & { 550?: string };
//     }
// }
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteColor } from '@mui/material/styles/createPalette';

// Define the ExtendedPaletteColor interface
interface ExtendedPaletteColor {
    main: string;
    light: string; // Add light property
    dark: string;  // Add dark property
    contrastText: string; // Add contrastText property
    [key: string]: string; // Allow other properties as well
}

// Extend the Palette interface
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        neutral: ExtendedPaletteColor; // Add your custom property here
    }

    interface PaletteOptions {
        neutral: ExtendedPaletteColor; // Add your custom property here
    }
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#8C32D9',
            dark: "#7F6A95",
            light: "rgba(0,0,0,0)",
            contrastText: "#A3AED0",
            50: '#E0DAE5',
            100: '#D5C3E5',
            200: '#C9A8E5',
            300: '#C480FF',
            400: '#A750F2',
            500: '#8C32D9',
            600: '#7B2CBF',
            700: '#520E8C',
            800: '#220F33',
        },
        secondary: {
            main: '#E8890C',
            light: "rgba(0,0,0,0)",
            50: '#FCF4E9',
            100: '#F7DDBA',
            200: '#F5C789',
            300: '#F6B155',
            400: '#FAA638',
            500: '#E8890C',
            600: '#CC7400',
            700: '#995700',
            800: '#342111',
        },
        error: {
            main: '#E8383B',
            light: "rgba(0,0,0,0)",
            50: '#F6CACC',
            100: '#F1A7A9',
            200: '#EC8385',
            300: '#E35053',
            400: '#E8383B',
            500: '#D02224',
            600: '#A61617',
            700: '#781315',
            800: '#290607',
        },
        success: {
            main: '#0FD36A',
            light: "rgba(0,0,0,0)",
            50: '#CAFBE1',
            100: '#95F8C3',
            200: '#5FF4A5',
            300: '#2AF086',
            400: '#0FD36A',
            500: '#0B9D4E',
            600: '#097E3F',
            700: '#42594B',
            800: '#021F10',
        },
        warning: {
            main: '#FFD029',
            50: '#FFFBEB',
            100: '#FFF2C2',
            200: '#FFE68F',
            300: '#FFDB5C',
            400: '#FFD029',
            500: '#F6C000',
            600: '#C29700',
            700: '#8F6F00',
            800: '#292000',
        },
        neutral: {
            main: '#F7F5FA',
            light: '#E0D7E9', // Define light variant
            dark: '#C4B9C9',  // Define dark variant
            contrastText: '#000000', // Define contrast text color
            50: '#F7F5FA',
            100: '#D5D0DB',
            200: '#B7B0BF',
            300: '#9B92A6',
            400: '#81778C',
            // 500: '#5B5266',
            500: '#4D4259',
            600: '#373040',
            700: '#1C1926',
            800: '#0E0C15',
            900: '#09080D',
        },
        text: {
            primary: '#ffffff', // رنگ متن اصلی (سفید)
            secondary: '#000000', // رنگ متن ثانویه (مشکی)
            disabled: '#5B5266', //
        },
        background: {
            default: '#0E0C15', // رنگ پس‌زمینه اصلی (بنفش)
            paper: '#1D182E', // رنگ پس‌زمینه دوم (سفید)
        },
    },
    typography: {
        fontFamily: 'Dana-Regular',
        h1: {
            fontSize: '3rem', // 48px
            fontWeight: 900, //black
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        h2: {
            fontSize: '2rem', // 32px
            fontWeight: 800, //extra bold
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        h3: {
            fontSize: '1.5rem', // 24px
            fontWeight: 700, //bold
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        h4: {
            fontSize: '1.25rem', // 20px
            fontWeight: 700, //bold
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        h5: {
            fontSize: '1.125rem', // 18px
            fontWeight: 700, //bold

        },
        body1: {
            fontSize: '1rem', // 16px
            fontWeight: 600, //demibold
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        body2: {
            fontSize: '0.875rem', // 14px
            fontWeight: 500, //medium
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        caption: {
            fontSize: '0.75rem', // 12px
            fontWeight: 400, //regular
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
        overline: {
            fontSize: '0.625rem', // 10px
            fontWeight: 400, //regular
            // lineHeight: '100%',
            // letterSpacing: '-2%',
        },
    },
});

export default theme;