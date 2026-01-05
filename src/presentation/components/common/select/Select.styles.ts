import { Select, styled } from "@mui/material";

export const StyledSelect = styled(Select)(({ theme, value }) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    height: 48,
    // width: "100%",
    borderRadius: "15px",
    fontFamily: "Dana-Regular",

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
        paddingInlineEnd: (4.5),
    },
    "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline": {
        // border: `1px solid ${theme.palette.text.disabled}`,
        border: "none",

    },
    "& .MuiOutlinedInput-notchedOutline": {
        // border: `1px solid ${selectedbordercolorr}`,
        border: "none",

    },
    "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
        color: value ? theme.palette.neutral[100] : theme.palette.text.disabled,
        paddingInline: theme.spacing(2, 4.5),
        // marginLeft: "40px",
        paddingBlock: theme.spacing(1.5),
        // display: "flex",
        // alignItems: "center",
    },
    "& svg": {
        position: "absolute",
        left: "10px",
        right: "unset",
        transition: "transform 200ms ease-in-out",
        flexShrink: 0,
        // pointerEvents: "none",
        // top: "calc(50% - 0.5rem)",
        top: "50%",
        transform: "translateY(-50%)",
        // color: selectedtextcolor,
    },

    
}))


