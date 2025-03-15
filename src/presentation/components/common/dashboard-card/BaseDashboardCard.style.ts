import { Box, styled, Typography } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "16px",
    padding: "16px",
    width: "220px",
    "&:hover": {
        borderColor: "#fff"
    }
}))

export const InfoGrid = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "3rem auto",
    rowGap: "4px",
    columnGap: "8px",
}))

export const IconWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.neutral[550],
    padding: "12px",
    borderRadius: "50px",
    gridRow: "1/3",
    width: "24px",
    height: "24px",
}))

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral[100],
}))

export const City = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral[200],
}))

export const Divider = styled("hr")(({ theme }) => ({
    margin: "8px 0",
    border: `1px solid ${theme.palette.text.disabled}`
}))

export const StatsContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
}))

export const StatItem = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: theme.palette.neutral[200]
}))