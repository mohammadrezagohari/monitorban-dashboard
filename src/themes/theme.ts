// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0B1437',
            contrastText:"#A3AED0"
        },
        secondary: {
            main: '#dc004e',
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
