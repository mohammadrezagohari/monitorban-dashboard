import { Box, BoxProps, styled } from "@mui/material";

export const StyledSectionContainer = styled(Box)<BoxProps>(({ theme, width, height }) => ({
    padding: "0.75rem",
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[700],
    width: `${width}px`,
    height: `${height}px`,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
        padding: "1rem",
        borderRadius: "25px",
    }
}))

export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "0.75rem",
    [theme.breakpoints.up("md")]: {
        marginBottom: "1rem",
    }
}))



export const MainContainer = styled(Box)(() => ({
    overflow: "scroll",
    "&::-webkit-scrollbar": { display: "none" },
}))