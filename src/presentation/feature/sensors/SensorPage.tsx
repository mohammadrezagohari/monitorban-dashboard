import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Button from "@/presentation/components/common/buttons/Button";
import { GridBox } from "@/presentation/components/common/GridBox";
import Filter from "@/presentation/components/common/operations/Filter";
import { FilterOption } from "@/presentation/components/common/operations/IFilter";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { sensorsData } from "@/presentation/data/data";
import SensorsCategoryItem from "./components/SensorsCategoryItem";
import {
  FilterBox,
  StyledSensorPage,
  StyledSensorsMainContainer,
} from "./SensorPage.styles";

const filterOptions: FilterOption[] = [
  { id: "1", value: "zare", label: "بیمارستان زارع" },
  { id: "2", value: "bou-ali", label: "بیمارستان بوعلی" },
  { id: "3", value: "olum-pezeshki", label: "دانشکده علوم پزشکی" },
  { id: "4", value: "razi", label: "کلینیک رازی" },
];

function SensorsPage() {
  // const [selectValue, setSelectValue] = useState("");
  const [sensorsList, setSensorsList] = useState(sensorsData);
  const [sortBy, setSortBy] = useState("server-room"); // برای بخش فیلتر که دیتا را براساس گزینه های انتخابی کاربر فیلتر و نمایش دهد
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<
    (typeof sensorsData)[number] | null
  >(null);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleFilterButton = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleFilterForm = (formData) => {
    console.log("Parent component => ", formData);
  };

  useEffect(function () {
    // for get each sensors detail from API. (setSensorsList)
  }, []);

  console.log("sensor list => ", sensorsList);

  return (
    <>
      <PageTitle title="سنسورها" />

      <StyledSensorPage>
        <HeaderContainer>
          <SectionTitle>دسته بندی سنسورها</SectionTitle>
        </HeaderContainer>

        <StyledSensorsMainContainer>
          <FilterBox>
            <Button
              variant="outlined"
              size={isDesktop ? "large" : "small"}
              colorType="primary"
              ref={anchorRef}
              onClick={handleFilterButton}
              leftIcon={
                isDesktop ? (isFilterOpen ? "arrowUp" : "arrowDown") : null
              }
              rightIcon="filter"
            >
              فیلتر
            </Button>
            {isFilterOpen && (
              <Filter
                // anchorRef={anchorRef}
                options={filterOptions}
                selectedOptions={selectedOptions}
                onChange={setSelectedOptions}
                onApply={handleFilterForm}
                onClose={() => setIsFilterOpen(false)}
              />
            )}
          </FilterBox>
          <GridBox>
            {sensorsList.map((item) => (
              <SensorsCategoryItem category={item} key={item.id} />
            ))}
          </GridBox>
        </StyledSensorsMainContainer>
      </StyledSensorPage>
    </>
  );
}

export default SensorsPage;
