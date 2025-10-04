import { Box, styled, Tab as MuiTab, Tabs as MuiTabs } from "@mui/material";
import SectionContainer from "../section-container/SectionContainer";
import { MainContainer } from "../section-container/SectionContainer.styles";

export const StyledTabsHeader = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
}))

export const StyledTabs = styled(MuiTabs)(({ theme }) => ({
    "& .MuiTabs-list": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.neutral[300]}`,
    },
}))

export const Tab = styled(MuiTab)(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.neutral[300],
    padding: theme.spacing(1, 0),
    minWidth: "auto",

    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.body1.fontSize,
    }
}))

export const StyledCardsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))

export const GroupCreatorSection = styled(SectionContainer)(({ theme }) => ({
    borderRadius: "15px !important"
}))

export const GroupCreatorMain = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))

export const CheckboxContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),

    "& > *": {
        flex: 1,

        [theme.breakpoints.up("md")]: {
            flex: "unset"
        }
    }
}))