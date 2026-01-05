import { SelectChangeEvent } from "@mui/material";
import { Option } from "@/presentation/components/common/select/ISelect";
import { StyledRealtimeFilterSelect } from "./RealtimeFilterSelect.styles";

type Props<T extends string> = {
  value: T;
  setValue: (val: T) => void;
  options: Option[];
};

const RealtimeFilterSelect = <T extends string>({
  value,
  setValue,
  options,
}: Props<T>) => {
  function handleSelectChange(e: SelectChangeEvent) {
    setValue(e.target.value as T);
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
