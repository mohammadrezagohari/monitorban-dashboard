import { annouceSelectOptions } from "src/presentation/feature/test/data";
import BaseSelect from "./BaseSelect";

const CustomSelect1 = ({ selectValue, setSelectValue }) => {
  return (
    <BaseSelect
      value={selectValue}
      onChange={(val: string) => setSelectValue(val)}
      options={annouceSelectOptions}
      sx={{
        // mt: 2,
        // mb: 1,
        typography: "caption",
        fontSize: 12,
        fontWeight: 500,
        height: 32,
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "10px",
        },
        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
          paddingRight: "12px",
          paddingBlock: "8px",
        },
      }}
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

export default CustomSelect1;
