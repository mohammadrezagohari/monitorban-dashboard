import { styled } from "@mui/material";
import { StyledSelect } from "./Select.styles";

export const StyledAdvancedFilterSelect = styled(StyledSelect)(({ theme }) => ({
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: "10px",
    },
}))