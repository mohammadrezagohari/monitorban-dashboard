import { Box, styled } from "@mui/material";

export const LogoContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3.5),

    "& .logo-box": {
        display: "flex",
        alignItems: "flex-end",
    },
}))