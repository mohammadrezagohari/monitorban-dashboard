import { useState } from "react";
import { FilterPopoverProps } from "./IFilter";
import {
  Box,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import FormSelect from "../old/select/FormSelect";
import Divider from "../divider/Divider";
import CheckBoxInput from "src/presentation/feature/old/checkbox-input-group/CheckBoxInput";
import Button from "../buttons/Button";
import { StyledPaper } from "./Filter.styles";

const Filter: React.FC<FilterPopoverProps> = ({
  options,
  selectedOptions,
  onChange,
  onApply,
  onClose,
  anchorRef,
}) => {
  const [filterSelectValue, setFilterSelectValue] = useState("");

  const handleToggle = (value: string) => {
    const currentIndex = selectedOptions.indexOf(value);
    const newSelected = [...selectedOptions];

    if (currentIndex === -1) {
      newSelected.push(value);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    onChange(newSelected);
  };

  return (
    // <Box
    //   sx={{
    //     position: "absolute",
    //     top: "calc(100% + 15px)",
    //     bgcolor: "#373040",
    //     width: 285,
    //     border: "1px solid #9B92A6",
    //     borderRadius: "15px",
    //     padding: "1.5rem",
    //   }}
    // >
    //   <Typography variant="h3" color="neutral.main" sx={{ mb: 2 }}>
    //     فیلتر
    //   </Typography>
    //   <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    //     <Box></Box>
    //     <Divider />
    //     <Box>
    //       <CheckBoxInput
    //         options={[
    //           { value: "zare", label: "بیمارستان زارع" },
    //           { value: "bou-ali", label: "بیمارستان بوعلی" },
    //           { value: "olum-pezeshki", label: "دانشکده علوم پزشکی" },
    //           { value: "razi", label: "کلینیک رازی" },
    //         ]}
    //         label="بر اساس مرکز :"
    //       />
    //     </Box>
    //   </Box>
    //   <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5 }}>
    //     <ButtonPrimarySmallOutlined>لغو</ButtonPrimarySmallOutlined>
    //     <ButtonPrimarySmallFilled>اعمال فیلتر</ButtonPrimarySmallFilled>
    //   </Box>
    // </Box>
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
            <ClickAwayListener onClickAway={onClose}>
              <Box>
                <Typography component="h5" variant="h3" mb={2}>
                  فیلتر
                </Typography>
                <Box>
                  <FormSelect
                    label="بر اساس نوع"
                    options={options}
                    value={filterSelectValue}
                    onChange={(e) => setFilterSelectValue(e.target.value)}
                    // MenuProps={{ disablePortal: true }}
                  />
                  <Divider />
                  <CheckBoxInput
                    options={options}
                    label="بر اساس مرکز :"
                    selectedValues={selectedOptions}
                    onChange={onChange}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5 }}
                >
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
                    onClick={onApply}
                  >
                    اعمال فیلتر
                  </Button>
                </Box>
              </Box>
            </ClickAwayListener>
          </StyledPaper>
        </Grow>
      )}
    </Popper>
  );
};

export default Filter;
