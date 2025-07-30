import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { Box, styled } from "@mui/material";

export const StyledMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))

export const StyledFAQItemContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    padding: theme.spacing(2),
}))

export const StyledQuestionContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& button": {
        border: `1px solid ${theme.palette.text.disabled}`,
        color: theme.palette.text.disabled,
        borderRadius: "10px",
    },

    "& > p": {
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
        [theme.breakpoints.up("md")]: {
            fontSize: theme.typography.body1.fontSize,
        }
    }
}))

export const StyledAnswerContainer = styled(MainContainer)(({ expanded, panel }) => ({
    maxHeight: expanded === panel ? 500 : 0,
    overflow: "hidden",
    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: expanded === panel ? 1 : 0,
    transitionProperty: "max-height, opacity",
    transitionDuration: "0.4s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
}))

export const StyledMessageBox = styled(Box)(() => ({
    gridColumn: " 1 / -1",
}))

export const ButtonBox = styled(Box)(({ theme }) => ({
    gridColumn: " 1 / -1",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: theme.spacing(2),

    "& button": {
        gridColumn: "3 / 4",
    },

    [theme.breakpoints.up("md")]: {
        justifySelf: "flex-end",
        marginTop: 0,
    }
}))

export const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "25px",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1.5),
    justifyContent: "center",
    fontSize: theme.typography.body2.fontSize,
    textAlign: "center",
    color: theme.palette.neutral.main,

    [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h3.fontSize,
    },

    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        gap: theme.spacing(8),
    }
}))