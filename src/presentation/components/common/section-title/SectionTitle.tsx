import { Typography } from "@mui/material";

const SectionTitle = ({ children }) => {
  return (
    <Typography
      variant="h3"
      color="neutral.main"
      lineHeight={1.6}
      sx={{
        fontSize: { md: 24, xs: 18 },
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle