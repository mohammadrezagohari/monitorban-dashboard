import { Checkbox, styled } from "@mui/material";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  // color: "#D5D0DB",
  color: "transparent",
  "&.Mui-checked": {
    color: "#8C32D9",
    border: "none",
    // backgroundColor: "transparent",
  },
  // "& .MuiSvgIcon-root": {
  //   fontSize: 24,
  // },
  "&.Mui-disabled": {
    color: "#5B5266",
  },
  "&.MuiCheckbox-root:hover": {
    backgroundColor: "transparent",
  },
}));

export default CustomCheckbox;
