import { Box, styled } from "@mui/material";

export const StyledDropzone = styled(Box)<{ isDragActive: boolean }>(({ theme, isDragActive }) => ({
    border: `1px solid ${theme.palette.text.disabled}`,
    borderRadius: "15px",
    backgroundColor: isDragActive
        ? theme.palette.neutral[600]
        : "transparent",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(2),

}))