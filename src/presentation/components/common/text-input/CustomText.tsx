import { styled } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
    'label':{
        color: ''
    },
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});


export default function CustomizedInputsStyled() {
    return (
        <Box
            component="form"
            noValidate
            sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2 }}
        >
            <CssTextField label="Custom CSS" id="custom-css-outlined-input" />

        </Box>
    );
}
