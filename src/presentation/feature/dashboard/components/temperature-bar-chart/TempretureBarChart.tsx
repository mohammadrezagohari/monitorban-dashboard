import { useState } from "react";

import FilterSelect from "src/presentation/components/common/old/select/FilterSelect";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { chartSelectOptions } from "src/presentation/data/data";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import BarChartjs from "src/presentation/feature/dashboard/components/bar-chart/BarChartjs";

function TemperatureBarChart() {
  const [chartSelectValue, setChartSelectValue] = useState("annual");

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>نمودار دمای اتاق</SectionTitle>
        <FilterSelect
          options={chartSelectOptions}
          value={chartSelectValue}
          setValue={setChartSelectValue}
        />
      </HeaderContainer>
      <MainContainer>
        <BarChartjs />
      </MainContainer>
    </SectionContainer>
  );
}

export default TemperatureBarChart;
