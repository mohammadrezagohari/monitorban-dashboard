import { Typography } from "@mui/material";
import Button from "../buttons/Button";
import { StyledEmptyData } from "./EmptyData.styles";
import { EmptyDataProps } from "./IEmptyData";

function EmptyData({ label, handleClick }: EmptyDataProps) {
  return (
    <StyledEmptyData>
      <Typography variant="body2" color="neutral.200">
        در حال حاضر هیچ {label !== "دسترسی" ? `${label}ی` : label} اضافه نشده
        است !
      </Typography>

      <Button
        variant="outlined"
        size="small"
        colorType="secondary"
        onClick={handleClick}
      >
        افزودن {label}
      </Button>
    </StyledEmptyData>
  );
}

export default EmptyData;
