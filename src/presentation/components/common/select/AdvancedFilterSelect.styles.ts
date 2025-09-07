import { styled } from "@mui/material";
import Select from "./Select";

export const StyledAdvancedFilterSelect = styled(Select)(({ theme }) => ({
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: "10px",
    },
}))