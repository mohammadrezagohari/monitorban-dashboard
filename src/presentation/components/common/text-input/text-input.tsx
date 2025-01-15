import React from 'react'
import { ITextInput } from './ItextInput'
import { TextField } from '@mui/material'
import { v4 as uniqueIdV4 } from 'uuid';

const textInput = ({ label, value, background, color, size = "md", type = "standard", id }: ITextInput) => {
    const uniqueId = uniqueIdV4().toString();
    return <TextField id={id ?? uniqueId} label={label} variant={type} />
}

export default textInput