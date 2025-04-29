import { styled } from "@mui/material";

export const Divider = styled("hr")(({ theme }) => ({
    border: `1px solid ${theme.palette.text.disabled}`,
    marginBlock: 1
}))