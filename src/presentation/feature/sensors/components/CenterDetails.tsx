import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import Filter from "src/presentation/components/common/operations/Filter";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { FilterIcon } from "src/presentation/assets/icons/FilterIcon";
import { MobileIcon } from "src/presentation/assets/icons/MobileIcon";
import { sensorsData } from "src/presentation/data/data";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import TemperatureCard from "src/presentation/components/common/temperature-card/TemperatureCard";
import { FilterOption } from "src/presentation/components/common/operations/IFilter";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { FilterSquareIcon } from "src/presentation/assets/icons/FilterSquareIcon";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import { CenterDetailsButtonsContainer } from "./Sensors.styles";

const filterOptions: FilterOption[] = [
  { id: 1, value: "zare", label: "بیمارستان زارع" },
  { id: 2, value: "bou-ali", label: "بیمارستان بوعلی" },
  { id: 3, value: "olum-pezeshki", label: "دانشکده علوم پزشکی" },
  { id: 4, value: "razi", label: "کلینیک رازی" },
];

interface CenterType {
  id: number | string;
  centerName: string;
  icon: string;
  city: string;
  sensors: {
    name: string;
    data: any;
    category: string;
    status: "warning" | "accept" | "danger";
  }[];
}

function CenterDetails() {
  //   const [sensorsList, setSensorsList] = useState(sensorsData);
  const [sortBy, setSortBy] = useState("server-room"); // برای بخش فیلتر که دیتا را براساس گزینه های انتخابی کاربر فیلتر و نمایش دهد
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<CenterType | null>(null);
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
      if (!centerObj) return;
      
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
        <Box>
          <CenterDetailsButtonsContainer>
            <Button
              variant="outlined"
              size={isDesktop ? "large" : "xxsmall"}
              colorType="primary"
              ref={anchorRef}
              onClick={handleFilterButton}
              endIcon={
                isFilterOpen ? (
                  <ArrowUpIcon size={isDesktop ? 24 : 16} />
                ) : (
                  <ArrowDownIcon size={isDesktop ? 24 : 16} />
                )
              }
              startIcon={<FilterIcon size={isDesktop ? 24 : 16} />}
            >
              فیلتر
            </Button>

            <Button
              variant="outlined"
              size={isDesktop ? "large" : "xxsmall"}
              colorType="primary"
              onClick={() => console.log("sort button clicked")}
              endIcon={
                isSortOpen ? (
                  <ArrowUpIcon size={isDesktop ? 24 : 16} />
                ) : (
                  <ArrowDownIcon size={isDesktop ? 24 : 16} />
                )
              }
              startIcon={<FilterSquareIcon size={isDesktop ? 24 : 16} />}
            >
              مرتب سازی
            </Button>

            {isDesktop ? (
              <Button
                variant="outlined"
                size="large"
                colorType="primary"
                onClick={handleAddSensorBtn}
                startIcon={<PlusIcon />}
              >
                افزودن سنسور جدید
              </Button>
            ) : (
              <IconButtonWithBorder onClick={handleAddSensorBtn}>
                <PlusIcon color={theme.palette.primary.dark} size={16} />
              </IconButtonWithBorder>
            )}
          </CenterDetailsButtonsContainer>

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
