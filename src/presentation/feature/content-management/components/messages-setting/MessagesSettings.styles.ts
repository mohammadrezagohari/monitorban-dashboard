import { styled } from "@mui/material";
import { HeaderContainer, MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";

export const StyledSettingsMainSection = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr",
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}))

export const SettingHeaderContainer = styled(HeaderContainer)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    gap: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    }
}))