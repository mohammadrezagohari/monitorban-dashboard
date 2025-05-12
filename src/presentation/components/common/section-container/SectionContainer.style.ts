import { Box, styled } from "@mui/material";

export const StyledSectionContainer = styled(Box)(({ theme, width, height }) => ({
    padding: "0.75rem",
    borderRadius: "25px",
    backgroundColor: "#1C1926",
    width: `${width}px`,
    height: `${height}px`,
    overflow: "hidden",
    flexShrink: 0,
    [theme.breakpoints.up("md")]: {
        padding: "1rem"
    }
}))

export const HeaderContainer = styled(Box)(() => ({
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "1rem"
}))



export const MainContainer = styled(Box)(() => ({
    overflow: "scroll",
    // height: "100%",
    // height: "calc(100% - 55px)",
    "&::-webkit-scrollbar": { display: "none" },
}))