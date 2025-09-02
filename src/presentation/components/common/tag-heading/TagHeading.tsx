import { styled, Typography } from "@mui/material";

const StyledTagHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral[200],
}));

function TagHeading({ children }) {
  return <StyledTagHeading variant="body2">{children}</StyledTagHeading>;
}

export default TagHeading;
