import { Checkbox, styled } from "@mui/material";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#D5D0DB",
  "&.Mui-checked": {
    color: "#8C32D9",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
  "&.Mui-disabled": {
    color: "#5B5266",
  },
}));

export default CustomCheckbox;
