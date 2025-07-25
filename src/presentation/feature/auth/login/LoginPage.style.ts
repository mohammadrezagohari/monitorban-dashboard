import { BoxProps, styled } from "@mui/material";
import Box from "@mui/material/Box"

export const LoginLayout = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
}));