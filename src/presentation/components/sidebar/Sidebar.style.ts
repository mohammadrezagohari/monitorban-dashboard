import { Box, styled } from "@mui/material";

export const StyledSidebarContainer = styled(Box)(() => ({
    backgroundColor: "#1C1926",
    borderRadius: "25px",
    // height: "100%",
    height: "max-content", //TODO:: چطوری باید ارتفاع سایدبار را مدیریت کنم؟ اینطوری درسته؟
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