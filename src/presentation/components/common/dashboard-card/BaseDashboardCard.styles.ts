import { Box, styled } from "@mui/material";

export const CardContainer = styled(Box)(() => ({
    backgroundColor: "#373040",
    borderRadius: "16px",
    padding: "16px",
    width: "220px",
}));

export const InfoGrid = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "3rem auto",
    rowGap: "4px",
    columnGap: "8px",
}));

export const IconWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4D4259",
    padding: "12px",
    borderRadius: "50px",
    gridRow: "1/3",
    width: "24px",
    height: "24px",
}));

export const Title = styled(Box)(() => ({
    color: "#D5D0DB",
}));

export const City = styled(Box)(() => ({
    color: "#B7B0BF",
}));

export const Divider = styled("hr")(() => ({
    margin: "8px 0",
    border: "1px solid #5B5266",
}));

export const StatsContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
}));

export const StatItem = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#B7B0BF",
})); 