import { Box, styled } from "@mui/material";

export const GridBox = styled(Box)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gap: theme.spacing(1),
    gridTemplateColumns: "minmax(0, 1fr)",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(2),
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
}));
