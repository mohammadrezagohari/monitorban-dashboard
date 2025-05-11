import { Box } from "@mui/material";
import { CustomSvgProps } from "./IIcons";

export const CheckIcon: React.FC<CustomSvgProps> = ({
  color = "#8C32D9",
  size = 20,
}) => {
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        border: "1px solid transparent",
        borderRadius: "5px",
        backgroundColor: color,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 7.1875L9.375 16.8125L5 12.4375"
          stroke="#F7F5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};
