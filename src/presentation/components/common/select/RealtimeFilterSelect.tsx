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
    />
  );
};

export default RealtimeFilterSelect;
