import { Box, styled } from "@mui/material";

export const GridBox = styled(Box)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gap: 8,
    gridTemplateColumns: "minmax(0, 1fr)",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gap: 16,
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
}));
