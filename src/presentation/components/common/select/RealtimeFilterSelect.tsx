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
    />
  );
};

export default RealtimeFilterSelect;
