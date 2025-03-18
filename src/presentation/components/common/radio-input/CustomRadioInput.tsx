import { Radio, styled } from "@mui/material";

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: "#F7F5FA",
  "&.Mui-checked": {
    color: "#8C32D9",
  },
  "&.Mui-disabled": {
    color: "#5B5266",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
}));

export default CustomRadio;
