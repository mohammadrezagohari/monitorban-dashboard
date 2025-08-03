import Box from "@mui/material/Box"
import { styled } from "@mui/material";
import { RowProps } from "./IRow";

export const StyledRow = styled(Box, {
    shouldForwardProp: (prop) => prop !== "type",
})<RowProps>(({ type = "block", theme }) => ({
    // styles for block
    ...(type === "block" && {
        display: "block",
    }),

    // styles for flex
    ...(type === "flex" && {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            alignItems: "stretch",
            gap: theme.spacing(3),
        }
    }),

    // styles for grid
    ...(type === "grid" && {
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "1fr",
        [theme.breakpoints.up("lg")]: {
            gap: theme.spacing(2, 3),
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "246px 1fr",
        },
    }),

    // marginBottom: "2rem",
}));