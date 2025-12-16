import { SelectChangeEvent } from "@mui/material";
import { Option } from "src/presentation/components/common/select/ISelect";
import { StyledRealtimeFilterSelect } from "./RealtimeFilterSelect.styles";
import { PeriodTypes } from "@/presentation/feature/dashboard/components/temperature-bar-chart/ITemperatureBarChart";

const RealtimeFilterSelect = ({
  value,
  setValue,
  options,
}: {
  value: PeriodTypes;
  options: Option[];
  setValue: (val: PeriodTypes) => void;
}) => {
  function handleSelectChange(e: SelectChangeEvent) {
    setValue(e.target.value as PeriodTypes);
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
