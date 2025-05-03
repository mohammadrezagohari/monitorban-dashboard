import { Select, styled } from "@mui/material";
import { StyledSelectProps } from "./IBaseSelect";

export const StyledSelect = styled(Select)<StyledSelectProps>(
    ({ selectedTextColor, selectedBorderColor }) => ({
        fontFamily: "Dana",
        // width: "85px",
        fontSize: "12px",
        fontWeight: 500,
        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
            paddingRight: "12px",
            paddingLeft: "40px",
            paddingBlock: "8px",
            color: selectedTextColor,
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
            borderRadius: "10px",
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
    })
);