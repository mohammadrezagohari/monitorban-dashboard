import { Box, styled, Tabs as MuiTabs, Tab as MuiTab } from "@mui/material";

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
    },
}))

export const StyledCardBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))