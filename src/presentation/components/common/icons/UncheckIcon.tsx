import { Box } from "@mui/material";
import { CustomSvgProps } from "./IIcons";

export const UncheckedIcon: React.FC<CustomSvgProps> = ({
  color = "#9B92A6",
  size = 20,
}) => {
  return (
    <Box
      component="span"
      sx={{
        width: size,
        height: size,
        border: `1px solid ${color}`,
        borderRadius: "5px",
      }}
    ></Box>
  );
};
