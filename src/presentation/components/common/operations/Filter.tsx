import { MouseEvent, useState } from "react";
import { FilterPopoverProps } from "./IFilter";
import {
  Box,
  ClickAwayListener,
  Fade,
  FormControl,
  Grow,
  Paper,
  Popper,
  Typography,
  useTheme,
} from "@mui/material";
import FormSelect from "../old/select/FormSelect";
import Divider from "../divider/Divider";
import CheckBoxInput from "src/presentation/feature/old/checkbox-input-group/CheckBoxInput";
import Button from "../buttons/Button";
import { StyledPaper } from "./Filter.styles";
import { useOperations } from "./Operations";
import { FilterIcon } from "src/presentation/assets/icons/FilterIcon";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { Form } from "../Form";
import FormRow from "../input/FormRow";
import { Controller, useForm } from "react-hook-form";
import Select from "../select/Select";
import CustomCheckbox from "../checkbox-input/CustomCheckBoxInput";
import LabeledCheckbox from "../checkbox-input/LabeledCheckbox";

function Filter({ id }) {
  const theme = useTheme();
  const { openId, setOpenId } = useOperations();
  const open = openId === id;
  //   const setOpen = setOpenId(open ? null : id);
  const [trigger, setTrigger] = useState<null | HTMLElement>(null);

  const { control, handleSubmit, register } = useForm();
  const selectOptions = [
    { value: "type1", label: "نوع 1" },
    { value: "type2", label: "نوع 2" },
    { value: "type3", label: "نوع 3" },
  ];

  const checkboxOptions = [
    { id: "center1", label: "مرکز 1" },
    { id: "center2", label: "مرکز 2" },
    { id: "center3", label: "مرکز 3" },
    { id: "center4", label: "مرکز 4" },
    { id: "center5", label: "مرکز 5" },
    { id: "center6", label: "مرکز 6" },
  ];

  function handleClick(event: MouseEvent<HTMLElement>) {
    setTrigger(event.currentTarget);
    setOpenId(open ? null : id);
  }

  function filterSubmit(data) {
    console.log("Filter applied:", data);
  }

  return (
    <Box>
      <Button
        type="button"
        aria-describedby={id}
        variant="outlined"
        size="large"
        onClick={handleClick}
        colorType="primary"
        startIcon={<FilterIcon size={24} />}
        endIcon={open ? <ArrowUpIcon size={24} /> : <ArrowDownIcon size={24} />}
      >
        فیلتر
      </Button>

      <Popper
        id={id}
        open={open}
        anchorEl={trigger}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Form
              onSubmit={handleSubmit(filterSubmit)}
              sx={{
                padding: 3,
                // backgroundColor: "red",
                marginTop: 1,
                // marginTop: "0.5rem",
                // padding: "1rem",
                borderRadius: "12px",
                backgroundColor: theme.palette.neutral[600],
                color: theme.palette.neutral.main,
                width: 300,
                border: `1px solid ${theme.palette.neutral[300]}`,
              }}
            >
              <Typography component="h5" variant="h3" mb={2}>
                فیلتر
              </Typography>

              <Box mb={3}>
                <FormRow label="نوع سنسور:">
                  <Controller
                    name="sensorType"
                    control={control}
                    defaultValue="type1"
                    render={({ field }) => (
                      <Select
                        id="sensorType"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        options={selectOptions}
                      />
                    )}
                  />
                </FormRow>

                <Divider />

                <FormRow label="براساس مرکز:">
                  <LabeledCheckboxGroup
                    items={checkboxOptions}
                    id="centerCheckboxGroup"
                    register={register}
                  />
                </FormRow>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifySelf: "flex-end",
                }}
              >
                <Button variant="outlined" size="small" colorType="primary">
                  لغو
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  colorType="primary"
                  type="submit"
                >
                  اعمال فیلتر
                </Button>
              </Box>
            </Form>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

export default Filter;

function LabeledCheckboxGroup({ items, id, register }) {
  return (
    <FormControl
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {items.map((item) => (
        <LabeledCheckbox
          key={item.id}
          label={item.label}
          {...register(item.id, {
            
          })}
        />
      ))}
    </FormControl>
  );
}
