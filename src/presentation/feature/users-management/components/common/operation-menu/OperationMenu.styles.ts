import { Menu as MuiMenu, styled } from "@mui/material";

export const Menu = styled(MuiMenu)(({ theme }) => ({
    "& .MuiPaper-root": {
        width: 133,
        borderRadius: "10px",
        border: `1px solid ${theme.palette.neutral[300]}`,
        backgroundColor: theme.palette.neutral[600],
    },
    "& .MuiButtonBase-root": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(0.5),
        padding: theme.spacing(1, 1.5),
        minHeight: 0,
    },
    "& .MuiTypography-root": {
        ...theme.typography.body2,
    },
    "& .MuiListItemIcon-root": {
        minWidth: 0,
    },
}))