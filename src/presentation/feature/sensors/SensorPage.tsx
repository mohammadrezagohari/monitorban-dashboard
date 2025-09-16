import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import Filter from "src/presentation/components/common/operations/Filter";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { FilterIcon } from "src/presentation/assets/icons/FilterIcon";
import { sensorsData } from "src/presentation/data/data";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import SensorsCategoryItem from "./components/SensorsCategoryItem";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { FilterOption } from "src/presentation/components/common/operations/IFilter";
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
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<
    (typeof sensorsData)[number] | null
  >(null);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handleFilterButton = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleFilterForm = (formData) => {
    console.log("Parent component => ", formData);
  };

  useEffect(function () {
    // for get each sensors detail from API. (setSensorsList)
  }, []);

  return (
    <>
      <PageTitle title="سنسورها" />

      <StyledSensorPage>
        <HeaderContainer>
          <SectionTitle>دسته بندی سنسورها</SectionTitle>
        </HeaderContainer>

        <StyledSensorsMainContainer>
          <FilterBox
          >
            <Button
              variant="outlined"
              size={isDesktop ? "large" : "small"}
              colorType="primary"
              ref={anchorRef}
              onClick={handleFilterButton}
              endIcon={
                isDesktop ? (
                  isFilterOpen ? (
                    <ArrowUpIcon size={24} />
                  ) : (
                    <ArrowDownIcon size={24} />
                  )
                ) : null
              }
              startIcon={<FilterIcon size={isDesktop ? 24 : 20} />}
            >
              فیلتر
            </Button>
            {isFilterOpen && (
              <Filter
                anchorRef={anchorRef}
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
