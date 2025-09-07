import { styled } from "@mui/material";
import Select from "./Select";

export const FormSelect = styled(Select)(({ theme }) => ({
    border: `1px solid ${theme.palette.text.disabled}`,
}))