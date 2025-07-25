import { styled, Typography } from "@mui/material";


export const StyledTag = styled(Typography)<{ $type?: "primary" | "secondary" }>(({ theme, $type = "primary" }) => ({
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    padding: "5.5px 10px",
    width: "max-content",
    whiteSpace: "nowrap",
    ...($type === "primary" && {
        color: theme.palette.primary[300],
        backgroundColor: theme.palette.neutral[500],
    }),
    ...($type === "secondary" && {
        color: theme.palette.secondary[200],
        backgroundColor: theme.palette.secondary[800],
    })
}))

export const StyledTagWithBullet = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    color: theme.palette.neutral.main,
}))