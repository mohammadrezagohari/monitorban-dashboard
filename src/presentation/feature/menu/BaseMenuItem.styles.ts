import { ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledMenuItem = styled(ListItemButton, { shouldForwardProp: prop => prop !== "active" })<{ active?: boolean }>(
    ({ active }) => ({
        padding: "16px",
        display: "flex",
        gap: "8px",
        textDecoration: "none",
        alignItems: "center",
        textAlign: "right",
        borderRadius: "15px",
        backgroundColor: active ? "#373040" : "transparent",
        color: active ? "#F7F5FA" : "#B7B0BF",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#F7F5FA",
            backgroundColor: active ? "#373040" : "transparent",
        },
        "&.Mui-disabled": {
            color: "#5B5266" // برای حالت غیرفعال 
        },
    }))

