import { ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledMenuItem = styled(ListItemButton, { shouldForwardProp: prop => prop !== "active" })<{ active?: boolean }>(
    ({ active, theme }) => ({
        padding: "16px",
        display: "flex",
        gap: "8px",
        textDecoration: "none",
        alignItems: "center",
        textAlign: "right",
        borderRadius: "15px",
        backgroundColor: active ? theme.palette.neutral[600] : "transparent", //TODO
        color: active ? theme.palette.neutral[50] : theme.palette.neutral[200],
        transition: "color 0.3s ease",
        "&:hover": {
            color: theme.palette.neutral[50],
            backgroundColor: active ? theme.palette.neutral[600] : "transparent",
        },
        "&.Mui-disabled": {
            color: theme.palette.text.disabled // برای حالت غیرفعال 
        },
    }))

