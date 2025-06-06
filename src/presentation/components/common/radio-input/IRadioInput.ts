export interface RadioInputProps {
  option: { value: string; label: string; disabled?: boolean };
  selectedValue: any;
}

export interface RadioInputGroupProps {
  options: { value: string, label: string, disabled?: boolean }[];
  label?: string;
}