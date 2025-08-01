import { styled } from "@mui/material";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";

export const TextContainer = styled(SectionContainer)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
    }
}));
