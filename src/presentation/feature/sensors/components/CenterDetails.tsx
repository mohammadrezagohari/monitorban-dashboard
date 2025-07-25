import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import Filter from "src/presentation/components/common/operations/Filter";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { FilterIcon } from "src/presentation/assets/icons/FilterIcon";
import { MobileIcon } from "src/presentation/assets/icons/MobileIcon";
import { sensorsData } from "src/presentation/data/data";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { FilterOption } from "src/presentation/components/common/operations/IFilter";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { FilterSquareIcon } from "src/presentation/assets/icons/FilterSquareIcon";
import TemperatureCard from "src/presentation/components/common/temperature-card/TemperatureCard";

const filterOptions: FilterOption[] = [
  { value: "zare", label: "بیمارستان زارع" },
  { value: "bou-ali", label: "بیمارستان بوعلی" },
  { value: "olum-pezeshki", label: "دانشکده علوم پزشکی" },
  { value: "razi", label: "کلینیک رازی" },
];

function CenterDetails() {
  //   const [sensorsList, setSensorsList] = useState(sensorsData);
  const [sortBy, setSortBy] = useState("server-room"); // برای بخش فیلتر که دیتا را براساس گزینه های انتخابی کاربر فیلتر و نمایش دهد
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<
    (typeof sensorsData)[number] | null
  >(null);
  const navigate = useNavigate();
  const { centerName } = useParams();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const anchorRef = useRef<HTMLButtonElement>(null);

  useEffect(
    function () {
      const centerObj = sensorsData.find(
        (item) => item.centerName === centerName
      );
      setSelectedCenter(centerObj);
    },
    [centerName]
  );

  const handleFilterButton = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleAddSensorBtn = () => {
    navigate("/sensors/add-new-sensor");
  };

  return (
    <>
      <PageTitle title={centerName as string} />

      <SectionContainer>
        <Box sx={{ mb: 2, position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {isDesktop ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    colorType="primary"
                    ref={anchorRef}
                    onClick={handleFilterButton}
                    endIcon={
                      isFilterOpen ? (
                        <ArrowUpIcon size={24} />
                      ) : (
                        <ArrowDownIcon size={24} />
                      )
                    }
                    startIcon={<FilterIcon />}
                  >
                    فیلتر
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    colorType="primary"
                    onClick={() => console.log("sort button clicked")}
                    endIcon={
                      isSortOpen ? (
                        <ArrowUpIcon size={24} />
                      ) : (
                        <ArrowDownIcon size={24} />
                      )
                    }
                    startIcon={<FilterSquareIcon />}
                  >
                    مرتب سازی
                  </Button>
                </Box>

                <Button
                  variant="outlined"
                  size="large"
                  colorType="primary"
                  // onClick={() => console.log("add button clicked")}
                  onClick={handleAddSensorBtn}
                  startIcon={<PlusIcon />}
                >
                  افزودن سنسور جدید
                </Button>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="xxsmall"
                    colorType="primary"
                    ref={anchorRef}
                    onClick={handleFilterButton}
                    endIcon={
                      isFilterOpen ? (
                        <ArrowUpIcon size={24} />
                      ) : (
                        <ArrowDownIcon size={24} />
                      )
                    }
                    startIcon={<FilterIcon />}
                  >
                    فیلتر
                  </Button>
                  <Button
                    variant="outlined"
                    size="xxsmall"
                    colorType="primary"
                    onClick={() => console.log("sort button clicked")}
                    endIcon={
                      isSortOpen ? (
                        <ArrowUpIcon size={24} />
                      ) : (
                        <ArrowDownIcon size={24} />
                      )
                    }
                    startIcon={<FilterSquareIcon />}
                  >
                    مرتب سازی
                  </Button>
                </Box>

                <IconButton
                  sx={{
                    border: `1px solid ${theme.palette.primary.dark}`,
                    borderRadius: "10px",
                    p: "7px",
                  }}
                  onClick={handleAddSensorBtn}
                >
                  <PlusIcon color={theme.palette.primary.dark} size={16} />
                </IconButton>
              </>
            )}
          </Box>

          {isFilterOpen && (
            <Filter
              anchorRef={anchorRef}
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
        <GridBox>
          {selectedCenter?.sensors.map((sensor, index) => (
            <TemperatureCard
              key={index}
              status={sensor.status}
              name={sensor.name}
              icon={<MobileIcon />}
              percentData={sensor.data}
              incrementData={33}
              decrementData={1}
              hour="6"
            />
          ))}
        </GridBox>
      </SectionContainer>
    </>
  );
}

export default CenterDetails;
