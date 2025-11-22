import { styled, Typography } from "@mui/material";


export const StyledTag = styled(Typography)<{ $type?: "primary" | "secondary" | "normal" | "warning" | "danger" }>(({ theme, $type = "primary" }) => ({
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    padding: "5.5px 10px",
    width: "max-content",
    whiteSpace: "nowrap",
    ...($type === "primary" && { //@ts-ignore
        color: theme.palette.primary[300],
        backgroundColor: theme.palette.neutral[500],
    }),
    ...($type === "secondary" && {//@ts-ignore
        color: theme.palette.secondary[200], //@ts-ignore
        backgroundColor: theme.palette.secondary[800],
    }),
    ...($type === "normal" && {//@ts-ignore
        color: theme.palette.success.main, //@ts-ignore
        backgroundColor: theme.palette.success[700],
    }),
    ...($type === "warning" && { //@ts-ignore
        color: theme.palette.warning[500], //@ts-ignore
        backgroundColor: theme.palette.warning[800],
    }),
    ...($type === "danger" && {
        color: theme.palette.error.main, //@ts-ignore
        backgroundColor: theme.palette.error[800],
    }),
}))

export const StyledTagWithBullet = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    color: theme.palette.neutral.main,
}))