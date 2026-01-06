import { Box, BoxProps, styled } from "@mui/material";

export const StyledSectionContainer = styled(Box)<BoxProps>(({ theme, width, height }) => ({
    padding: theme.spacing(1.5),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[700],
    width: `${width}px`,
    height: `${height}px`,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
        borderRadius: "25px",
    }
}))

export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(2),
    }
}))



export const MainContainer = styled(Box)(() => ({
    overflow: "scroll",
    "&::-webkit-scrollbar": { display: "none" },
}))