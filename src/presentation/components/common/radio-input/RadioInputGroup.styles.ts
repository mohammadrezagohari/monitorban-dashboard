import { RadioGroup, styled } from "@mui/material";

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
    gap: theme.spacing(1),
    height: 48,
}))