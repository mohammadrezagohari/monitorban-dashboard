import { Select, styled } from "@mui/material";

export const StyledSelect = styled(Select)(({ theme, value }) => ({
    fontSize: 14,
    fontWeight: 500,
    height: 48,
    width: "100%",
    borderRadius: "15px",
    fontFamily: "Dana",

    // "&  ul:first-of-type": {
    //      color: "lightgreen"
    // },
    // border: `1px solid red`,
    // border: `1px solid ${theme.palette.text.disabled}`,
    "& .MuiSelect-select": {
        display: "block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: "36px",
    },
    "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.text.disabled}`,

    },
    "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
        color: value ? theme.palette.neutral[100] : theme.palette.text.disabled,
        paddingInline: "16px 30px",
        // marginLeft: "40px",
        paddingBlock: "12px",
        // display: "flex",
        // alignItems: "center",
    },
    "& .MuiSelect-icon": {
        left: "10px",
        right: "unset",
        transition: "transform 200ms ease-in-out",
        flexShrink: 0,
        // pointerEvents: "none",
        top: "calc(50% - 0.5rem)",
        // color: selectedTextColor,
    },
}))