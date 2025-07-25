import { Box, styled, IconButton as MuiIconButton } from "@mui/material";

export const StyledUserManagementItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    padding: theme.spacing(2),
}))

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: "10px",
    color: theme.palette.primary.dark
}))