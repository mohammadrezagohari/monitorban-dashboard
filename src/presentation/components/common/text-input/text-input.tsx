import React from 'react'
import { ITextInput } from './ItextInput'
import { v4 as uniqueIdV4 } from 'uuid';
import { CssTextField } from './CustomText';

const TextInput = ({ label, value, background, color, size = "md", type = "standard", id }: ITextInput) => {
    const uniqueId = uniqueIdV4().toString();
    return <CssTextField id={id ?? uniqueId}
        label={label} 
        variant={type} 
        slotProps={{
           
        }}
        sx={{ background: background ?? "background.default", color: color ?? "text.primary" }} />
}

export default TextInput