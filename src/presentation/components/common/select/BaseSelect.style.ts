import { Select, styled } from "@mui/material";
import { StyledSelectProps } from "./IBaseSelect";

export const StyledSelect = styled(Select)<StyledSelectProps>(
    ({ value, selectedTextColor, selectedBorderColor = "neutral.500" }) => ({
        fontFamily: "Dana",
        // width: "85px",
        height: 48,
        width: "100%",
        // fontSize: "12px",
        // fontWeight: 500,
        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
            paddingLeft: "40px",

            color: value ? selectedTextColor : "#5B5266",
            height: "100%",
            boxSizing: "border-box"
        },
        "& .MuiSelect-icon": {
            left: "10px",
            right: "unset",
            transition: "transform 200ms ease-in-out",
            flexShrink: 0,
            pointerEvents: "none",
            top: "calc(50% - 0.5rem)",
            color: selectedTextColor,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${selectedBorderColor}`,

        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: selectedBorderColor,
        },
        "& .MuiSelect-icon.MuiSelect-iconOpen": {
            transform: "rotate(180deg)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: selectedBorderColor,
            borderWidth: "1px",
        },
        // "& .MuiSelect-select:not([data-placeholder])": {
        //     color: "#212121"
        // }
    })
);