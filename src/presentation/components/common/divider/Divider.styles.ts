import { Divider, styled } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
    border: `1px solid ${theme.palette.text.disabled}`,
    marginBlock: theme.spacing(1),
}))