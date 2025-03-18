// src/theme.ts
import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
    interface Palette {
        yellow: Palette['primary'];
        // neutral: Palette['primary'];
        neutral: Palette['primary'] & { 550?: string };
    }

    interface PaletteOptions {
        yellow?: PaletteOptions["primary"];
        neutral?: PaletteOptions["primary"] & { 550?: string };
    }
}


const theme = createTheme({
    palette: {
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
        yellow: {
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
            50: '#F7F5FA',
            100: '#D5D0DB',
            200: '#B7B0BF',
            300: '#9B92A6',
            400: '#81778C',
            500: '#5B5266',
            550: '#4D4259',
            600: '#373040',
            700: '#1C1926',
            800: '#0E0C15',
            900: '#09080D',
        },
        text: {
            primary: '#ffffff', // رنگ متن اصلی (سفید)
            secondary: '#000000', // رنگ متن ثانویه (مشکی)
        },
        background: {
            default: '#0B1437', // رنگ پس‌زمینه اصلی (بنفش)
            paper: '#ffffff', // رنگ پس‌زمینه دوم (سفید)
        },
    },
});

export default theme;
