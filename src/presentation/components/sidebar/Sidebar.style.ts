import { styled } from "@mui/material";

export const StyledSidebarContainer = styled("div")(() => ({
    backgroundColor: "#1C1926",
    borderRadius: "25px",
    height: "100%",
    padding: "32px 16px",
    width: "250px",
}))

export const StyledDrawer = {
    "& .MuiDrawer-paper": {
        position: "static",
        bgcolor: "transparent",
        border: "none",
    }
}