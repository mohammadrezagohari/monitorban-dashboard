import { Box, styled } from "@mui/material";

export const UserDetail = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}))

export const StyledUserAccountCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
}))

export const UserInfo = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
})