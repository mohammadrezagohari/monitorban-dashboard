import { Box, Grow, MenuItem, Popper, Select, Typography } from "@mui/material";

import Button from "../buttons/Button";
import FormRow from "../input/FormRow";
import Divider from "../divider/Divider";
import { ButtonsContainer, StyledPaper } from "./Filter.styles";
import ControledCheckbox from "../checkbox/ControledCheckbox";
import AdvancedFilterSelect from "../select/AdvancedFilterSelect";
import { FilterPopoverProps } from "./IFilter";
import { Controller, useForm } from "react-hook-form";

const Filter: React.FC<FilterPopoverProps> = ({
  options = [],
  // selectedOptions = [],
  onChange,
  onApply,
  onClose,
  anchorRef,
}) => {
  // const [filterSelectValue, setFilterSelectValue] = useState("");
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      "sensor-type": "",
      "data-centers": [],
    },
  });

  const handleInternalSubmit = (data) => {
    // if (data) {
    console.log(data);
    onApply?.(data);
    onClose();
    // }
  };

  // const handleClickAway = (event: MouseEvent | TouchEvent) => {
  //   const target = event.target as Node | null;
  //   const menu = document.querySelector(".MuiPopover-root");

  //   if (menu && target && menu.contains(target)) {
  //     return;
  //   }
  //   onClose?.();
  // };

  // const handleToggle = (value: string) => {
  //   const currentIndex = selectedOptions.indexOf(value);
  //   const newSelected = [...selectedOptions];

  //   if (currentIndex === -1) {
  //     newSelected.push(value);
  //   } else {
  //     newSelected.splice(currentIndex, 1);
  //   }

  //   onChange?.(newSelected);
  // };

  return (
    <Popper
      open
      anchorEl={anchorRef.current}
      transition
      placement="bottom-start"
      disablePortal
      sx={{ zIndex: 5 }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <StyledPaper>
            {/* <ClickAwayListener onClickAway={onClose} disableReactTree={false}> */}
            <Box component="form" onSubmit={handleSubmit(handleInternalSubmit)}>
              <Typography component="h5" variant="h3" mb={2}>
                فیلتر
              </Typography>
              <Box>
                <FormRow label="نوع سنسور :">
                  <Controller
                    name="sensor-type"
                    control={control}
                    render={({ field }) => (
                      <AdvancedFilterSelect
                        id="sensor-type"
                        {...field}
                        options={options}
                      />
                    )}
                  />
                </FormRow>

                <Divider />

                <FormRow label="بر اساس مرکز :">
                  {options.map((opt) => (
                    <ControledCheckbox
                      key={opt.id}
                      name="data-centers"
                      label={opt.label}
                      itemValue={opt.value}
                      control={control}
                    />
                  ))}
                </FormRow>
              </Box>
              <ButtonsContainer>
                <Button
                  variant="outlined"
                  size="small"
                  colorType="primary"
                  onClick={onClose}
                >
                  لغو
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  colorType="primary"
                  type="submit"
                  // onClick={onApply}
                >
                  اعمال فیلتر
                </Button>
              </ButtonsContainer>
            </Box>
            {/* </ClickAwayListener> */}
          </StyledPaper>
        </Grow>
      )}
    </Popper>
  );
};

export default Filter;
