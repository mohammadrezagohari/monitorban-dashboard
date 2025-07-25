import { Box, styled } from "@mui/material";

export const StyledSidebar = styled("aside")(() => ({
    backgroundColor: "#1C1926",
    borderRadius: "25px",
    padding: "32px 16px 7px",
    width: "250px",
    gridRow: "1 / -1",
    color: "#EEE",
    height: 'max-content',
    position: "sticky",
    top: "1.5rem",
}))

export const StyledDrawer = {
    "& .MuiDrawer-paper": {
        position: "static",
        bgcolor: "transparent",
        border: "none",
    }
}

export const LogoContainer = styled(Box)(() => ({
    marginBottom: "27px",
}))

export const ProfileContainer = styled(Box)(() => ({
    marginBottom: "64px",
    backgroundColor: "red",
    height: "113px",
    borderRadius: "15px",
    padding: "10px",
}))