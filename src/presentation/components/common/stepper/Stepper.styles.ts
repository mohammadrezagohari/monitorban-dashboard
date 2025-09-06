import { Box, styled, Stepper as MuiStepper } from "@mui/material";
import { MainContainer } from "../section-container/SectionContainer.style";

export const AccessTypeMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "(1fr)",
    color: theme.palette.neutral.main,
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    }
}))

export const StyledStepbar = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))

export const Steps = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

export const StyledStepper = styled(MuiStepper)(({ theme }) => ({
    width: 350,
    "&.MuiStepper-root *": { p: 0 },
    "&.MuiStepper-root": { gap: theme.spacing(4) },
    "& .MuiStepConnector-root": { display: "none" },
    "& .MuiStepLabel-root": {
        gap: theme.spacing(1),
        "& .Mui-disabled": { color: theme.palette.text.disabled },
        "& .Mui-active": { color: theme.palette.neutral[200] },
        "& .Mui-completed": { color: theme.palette.neutral.main },
    },
    "& .MuiStepLabel-labelContainer": { whiteSpace: "nowrap" },
}))

export const ButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    minWidth: 300,
    justifyContent: "flex-end",
}))
