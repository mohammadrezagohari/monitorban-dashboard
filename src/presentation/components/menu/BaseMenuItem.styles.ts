import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),

        padding: theme.spacing(2),
        textAlign: "right",
        borderRadius: "15px",
        color: theme.palette.neutral[200],
        transition: "color 0.3s ease",

        "& > svg": {
            color: theme.palette.text.disabled
        },

        "&:hover": {
            color: theme.palette.neutral[50],
        },

        "&:hover > svg, &.active > svg": { //@ts-ignore
            color: theme.palette.primary[200]
        },

        "&.Mui-disabled": {
            color: theme.palette.text.disabled // برای حالت غیرفعال 
        },

        "&.active": {
            color: theme.palette.neutral[50],
            backgroundColor: theme.palette.neutral[600],
        }
    }))

