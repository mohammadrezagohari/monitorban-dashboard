import { Box, styled } from "@mui/material";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledContentManagement = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(4),
    }
}))

export const SectionHeader = styled(HeaderContainer)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    gap: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    }
}))