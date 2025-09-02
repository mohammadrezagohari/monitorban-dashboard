import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button"

export const BackButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    color: theme.palette.primary[200],
    fontWeight: theme.typography.body2.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    padding: 0,

    "&:hover, &:active": {
        backgroundColor: "unset",
        color: theme.palette.primary[50],
    },
}))

