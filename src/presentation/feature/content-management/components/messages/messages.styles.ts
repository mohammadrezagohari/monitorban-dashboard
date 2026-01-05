import { Box, styled, Typography } from "@mui/material";

import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";

export const StyledMessageCard = styled(Box)(({ theme }) => ({
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    // gap: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
}))

export const StyledTextMessage = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.neutral.main,
    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.body1.fontSize,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    }
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    justifyContent: "flex-end"
}))

export const StyledMessagesContainer = styled(SectionContainer)(({ theme }) => ({
    flex: 1,
    [theme.breakpoints.up("md")]: {
        height: 368,
    },
    [theme.breakpoints.up("lg")]: {
        height: 320,
    },
}))

export const StyledMainSection = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    overflowY: "scroll",
    height: "calc(100% - 64px)",
}))

export const StyledExpandedBox = styled(Box)(({ expanded, panel }: { expanded: string | null; panel: string }) => ({
    maxHeight: expanded === panel ? 500 : 0,
    overflow: "hidden",
    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: expanded === panel ? 1 : 0,
    transitionProperty: "max-height, opacity",
    transitionDuration: "0.4s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
}))

export const AccordionHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(3),

    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
    },
    [theme.breakpoints.up("md")]: {
        flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
    },
}))

export const StyledReceivedMessagesListContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))