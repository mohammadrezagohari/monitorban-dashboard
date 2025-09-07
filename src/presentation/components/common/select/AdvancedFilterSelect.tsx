import { SelectProps } from "./ISelect";
import { StyledAdvancedFilterSelect } from "./AdvancedFilterSelect.styles";

export default function AdvancedFilterSelect({
  options,
  value,
  onChange,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <StyledAdvancedFilterSelect
      value={value}
      onChange={onChange}
      options={options}
      {...props}
    />
  );
}
