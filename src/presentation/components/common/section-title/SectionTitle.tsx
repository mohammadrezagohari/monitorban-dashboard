import { Typography } from "@mui/material";
import { SectionTitleProps } from "./ISectionTitle";

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Typography
      variant="h3"
      color="neutral.main"
      lineHeight={1.6}
      sx={{
        
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
