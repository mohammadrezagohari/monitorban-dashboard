import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import IconButton from "@/presentation/components/common/icon-button/IconButton";
import Button from "@/presentation/components/common/buttons/Button";
import { GridBox } from "@/presentation/components/common/GridBox";
import Filter from "@/presentation/components/common/operations/Filter";
import { FilterOption } from "@/presentation/components/common/operations/IFilter";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import TemperatureCard from "@/presentation/components/common/temperature-card/TemperatureCard";
import { sensorsData } from "@/presentation/data/data";
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
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
              leftIcon={isFilterOpen ? "arrowUp" : "arrowDown"}
              rightIcon="filter"
            >
              فیلتر
            </Button>

            <Button
              variant="outlined"
              size={isDesktop ? "large" : "xxsmall"}
              colorType="primary"
              onClick={() => console.log("sort button clicked")}
              leftIcon={isSortOpen ? "arrowUp" : "arrowDown"}
              rightIcon="filterSquare"
            >
              مرتب سازی
            </Button>

            {isDesktop ? (
              <Button
                variant="outlined"
                size="large"
                colorType="primary"
                onClick={handleAddSensorBtn}
                rightIcon="plus"
              >
                افزودن سنسور جدید
              </Button>
            ) : (
              <IconButton iconName="plus" variant="outlined" />
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
              icon="mobile"
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
