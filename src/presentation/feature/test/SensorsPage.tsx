import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  OutlinedInput,
  Paper,
  Popper,
  Select,
  styled,
  Typography,
} from "@mui/material";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { useRef, useState } from "react";
import { sensorsData } from "./data";
import SensorCard from "../sensor-card/SensorCard";
import { DashboardIcon } from "src/presentation/components/common/icons/DashboardIcon";
import SensorCategoryCard from "../sensor category card/SensorCategoryCard";
import ButtonPrimaryLargeOutlined from "../buttons/ButtonPrimaryLargeOutlined";
import { FilterIcon } from "src/presentation/components/common/icons/ّFilterIcon";
import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import ButtonPrimarySmallFilled from "../buttons/ButtonPrimarySmallFilled";
import ButtonPrimarySmallOutlined from "../buttons/ButtonPrimarySmallOutlined";
import { Divider } from "src/presentation/components/common/divider/CustomDivider.style";
import { ArrowUpIcon } from "src/presentation/components/common/icons/ArrowUpIcon";
import CheckBoxInput from "../checkbox-input-group/CheckBoxInput";
import SensorSituationCard from "../sensor situation card/SensorSituationCard";
import TemperatureCard from "../temperature card/TemperatureCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";

// const StyledSelect = styled(Select)(() => ({
//   "& .MuiOutlinedInput-input": {
//     paddingRight: "10px",
//     paddingLeft: "20px",
//   },
//   "& .MuiSelect-icon": {
//     right: "auto",
//     left: "10px",
//   },
// }));

// const CustomSelect = ({ options = [], ...props }) => (
//   <StyledSelect
//     {...props}
//     input={<OutlinedInput />}
//     // renderValue={(selected) => {
//     //   if (selected === "") {
//     //     return <p>یک گزینه را انتخاب کنید</p>;
//     //   }
//     //   return selected;
//     // }}
//     placeholder="یک گزینه را انتخاب کنید"
//   >
//     {options.map((opt) => (
//       <MenuItem key={opt.value} value={opt.value}>
//         {opt.label}
//       </MenuItem>
//     ))}
//   </StyledSelect>
// );

// const StyledSelect = styled(Select)(() => ({
//   "& .MuiSelect-select": {
//     paddingRight: "12px",
//     paddingLeft: "32px",
//   },
//   "& .MuiSelect-icon": {
//     left: "8px",
//     right: "unset",
//   },
// }));

// const CustomSelect = ({
//   options,
//   value,
//   onChange,
//   placeholder = "انتخاب کنید",
//   sx,
//   ...rest
// }) => {
//   const handleChange = (e) => onChange(e.target.value);

//   return (
//     // <StyledSelect>
//     //   {options.map((opt) => (
//     //     <MenuItem key={opt.value} value={opt.value}>
//     //       {opt.label}
//     //     </MenuItem>
//     //   ))}
//     // </StyledSelect>
//   );
// };

const filterOptions: FilterOption[] = [
  { value: "zare", label: "بیمارستان زارع" },
  { value: "bou-ali", label: "بیمارستان بوعلی" },
  { value: "olum-pezeshki", label: "دانشکده علوم پزشکی" },
  { value: "razi", label: "کلینیک رازی" },
];

export default function SensorsPage() {
  const [selectValue, setSelectValue] = useState("");
  const [sensorsList, setSensorsList] = useState(sensorsData);
  const [sortBy, setSortBy] = useState("server-room");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<
    (typeof sensorsData)[number] | null
  >(null);

  const handleFilterButton = () => {
    setIsFilterOpen((prev) => !prev);
  };
  // if (sortBy === "server-room") {
  //   sensorsList = sensorsData;
  // }
  // if (sortBy === "sensors") {
  //   sensorsList = sensorsData.slice().sort;
  // }

  const handleShowSensors = (center) => {
    setSelectedCenter(center);
    console.log("center:: ", center);
  };

  console.log("sensorsList:: ", sensorsList);

  return (
    <div>
      <Typography variant="h2" color="neutral.main" marginBottom={2}>
        {selectedCenter ? selectedCenter.centerName : "سنسورها"}
      </Typography>
      <Box>
        <SectionContainer>
          {!selectedCenter && (
            <HeaderContainer>
              <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
                دسته بندی سنسورها
              </Typography>
            </HeaderContainer>
          )}
          <MainContainer>
            {/* <CustomSelect
              options={[
                { value: "1", label: "گزینه اول" },
                { value: "2", label: "گزینه دوم" },
              ]}
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            /> */}
            {/* <Box>
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value={"server-room"}>اتاق سرور</option>
                <option value={"sensors"}>نوع سنسور</option>
              </select>
            </Box> */}
            {!selectedCenter ? (
              <>
                <Box sx={{ mb: 2, position: "relative" }}>
                  <ButtonPrimaryLargeOutlined
                    onClick={handleFilterButton}
                    leftIcon={
                      isFilterOpen ? <ArrowUpIcon /> : <ArrowDownIcon />
                    }
                    rightIcon={<FilterIcon />}
                  >
                    فیلتر
                  </ButtonPrimaryLargeOutlined>
                  {isFilterOpen && (
                    <Filter
                      options={filterOptions}
                      selectedOptions={selectedOptions}
                      onChange={setSelectedOptions}
                      onApply={() => {
                        console.log("فیلتر اعمال شده: ", selectedOptions);
                        setIsFilterOpen(false);
                      }}
                      onClose={() => setIsFilterOpen(false)}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xl: "repeat(4, 1fr)",
                      lg: "repeat(3, 1fr)",
                      md: "repeat(2, 1fr)",
                    },
                    gap: 2,
                    justifyItems: "center",
                  }}
                >
                  {sensorsList.map((item) => (
                    <SensorCategoryCard
                      key={item.centerName}
                      icon={<DashboardIcon />}
                      title={item.centerName}
                      normalSensor={
                        item.sensors.filter(
                          (sensor) => sensor.status === "accept"
                        ).length
                      }
                      warningSensor={
                        item.sensors.filter(
                          (sensor) => sensor.status === "warning"
                        ).length
                      }
                      dangerSensor={
                        item.sensors.filter(
                          (sensor) => sensor.status === "danger"
                        ).length
                      }
                      onClick={() => handleShowSensors(item)}
                    />
                  ))}
                </Box>
              </>
            ) : (
              // TODO::
              <>
                <Box sx={{ mb: 2, position: "relative" }}>
                  <ButtonPrimaryLargeOutlined
                    onClick={handleFilterButton}
                    leftIcon={
                      isFilterOpen ? <ArrowUpIcon /> : <ArrowDownIcon />
                    }
                    rightIcon={<FilterIcon />}
                  >
                    فیلتر
                  </ButtonPrimaryLargeOutlined>
                  <button onClick={() => handleShowSensors(null)}>Back</button>

                  {isFilterOpen && (
                    <Filter
                      options={filterOptions}
                      selectedOptions={selectedOptions}
                      onChange={setSelectedOptions}
                      onApply={() => {
                        console.log("فیلتر اعمال شده: ", selectedOptions);
                        setIsFilterOpen(false);
                      }}
                      onClose={() => setIsFilterOpen(false)}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xl: "repeat(4, 1fr)",
                      lg: "repeat(3, 1fr)",
                      md: "repeat(2, 1fr)",
                    },
                    gap: 2,
                    justifyItems: "center",
                  }}
                >
                  {selectedCenter.sensors.map((sensor) => (
                    <TemperatureCard
                      status={sensor.status}
                      name={sensor.name}
                      icon={<MobileIcon />}
                      percentData={sensor.data}
                      incrementData={33}
                      decrementData={1}
                      hour="6"
                    />
                  ))}
                </Box>
              </>
            )}
          </MainContainer>
        </SectionContainer>
      </Box>
    </div>
  );
}

interface FilterOption {
  label: string;
  value: string;
}

interface FilterPopoverProps {
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  onApply: () => void;
  onClose: () => void;
}

const Filter: React.FC<FilterPopoverProps> = ({
  options,
  selectedOptions,
  onChange,
  onApply,
  onClose,
}) => {
  const anchorRef = useRef<HTMLButtonElement>(null);

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
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper
            sx={{
              mt: 1,
              p: 2,
              borderRadius: "12px",
              bgcolor: "#2b2b2b",
              color: "neutral.main",
              width: 300,
            }}
          >
            <ClickAwayListener onClickAway={onClose}>
              <Box>
                <Typography variant="h3">فیلتر</Typography>
                <Box>
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
                  <ButtonPrimarySmallOutlined onClick={onClose}>
                    لغو
                  </ButtonPrimarySmallOutlined>
                  <ButtonPrimarySmallFilled onClick={onApply}>
                    اعمال فیلتر
                  </ButtonPrimarySmallFilled>
                </Box>
              </Box>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
