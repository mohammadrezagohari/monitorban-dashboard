// import { Option } from "./IBaseSelect";
import { SelectChangeEvent } from "@mui/material";
import { Option } from "src/presentation/components/common/select/ISelect";
import { StyledRealtimeFilterSelect } from "./RealtimeFilterSelect.styles";

const RealtimeFilterSelect = ({
  value,
  setValue,
  options,
}: {
  value: string;
  options: Option[];
  setValue: (val: string) => void;
}) => {
  function handleSelectChange(e: SelectChangeEvent) {
    setValue(e.target.value);
  }
  return (
    <StyledRealtimeFilterSelect
      // <BaseSelect
      value={value}
      onChange={handleSelectChange}
      options={options}
      sx={
        {
          // // mt: 2,
          // // mb: 1,
          // typography: "caption",
          // fontSize: 12,
          // fontWeight: 500,
          // height: 32,
          // "& .MuiOutlinedInput-notchedOutline": {
          //   borderRadius: "10px",
          // },
          // "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
          //   paddingRight: "12px",
          //   paddingBlock: "8px",
          // },
        }
      }
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
            bgcolor: "#373040",
            border: "1px solid #9B92A6",
            color: "neutral.main",
            borderRadius: "10px",
            direction: "rtl",
            li: {
              typography: "caption",
            },
          },
        },
      }}
    />
  );
};

export default RealtimeFilterSelect;
