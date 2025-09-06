import { Radio, styled } from "@mui/material";

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.neutral.main,
  "&:hover": {
    backgroundColor: "unset",
  },
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
}));

export default CustomRadio;
