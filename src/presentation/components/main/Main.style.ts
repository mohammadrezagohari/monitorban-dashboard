import { Box, BoxProps, styled } from "@mui/material";

export const StyledMain = styled(Box)<BoxProps>(() => ({
    overflowY: "scroll",
    scrollbarWidth: "none",
    height: "auto",
}))