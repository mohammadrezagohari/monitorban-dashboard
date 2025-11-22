import { styled } from "@mui/material";
import Select from "./Select";

export const StyledRealtimeFilterSelect = styled(Select)(({ theme }) => ({
    typography: "caption",
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    borderRadius: "10px",
    overflow: "hidden",
    height: 32,
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "10px",
    },
    "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": { //@ts-ignore
        color: theme.palette.secondary[200],
        // border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "10px",
        paddingInlineStart: theme.spacing(1.5),
        paddingBlock: theme.spacing(1),
        "&:hover": {//@ts-ignore
            backgroundColor: theme.palette.secondary[800],
        }
    },
    "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.secondary.main}`,
    },
    "& .MuiSelect-icon": {//@ts-ignore
        color: theme.palette.secondary[200],
    },
}))
