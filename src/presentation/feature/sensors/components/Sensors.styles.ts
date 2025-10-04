import { Box, styled } from "@mui/material";

export const CenterDetailsButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),

    "& :last-child": {
        marginRight: "auto",
    },

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(2),
    },
}));

export const AddSensorButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    alignSelf: "end",

    [theme.breakpoints.up("md")]: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
    },
}));

export const Form = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(4),
    },
}))

export const StyledSensorCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    padding: theme.spacing(2),
    width: 350,
    border: `1px solid transparent`,
    "&:hover": {
        borderColor: theme.palette.neutral[300],
    },
}));

export const StyledBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}));