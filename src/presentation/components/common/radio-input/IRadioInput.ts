export interface RadioInputProps {
  option: { value: string; label: string; disabled?: boolean };
}

export interface RadioInputGroupProps {
  options: { value: string, label: string, disabled?: boolean }[];
  row?: boolean;
  name?: string;
  // defaultValue?: string;
}