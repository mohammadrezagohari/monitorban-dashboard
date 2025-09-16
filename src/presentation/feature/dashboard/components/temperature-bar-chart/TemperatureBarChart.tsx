import { useState } from "react";

import useBarChart from "./useBarChart";

import BarChartjs from "src/presentation/feature/dashboard/components/bar-chart/BarChartjs";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { PeriodTypes } from "./ITemperatureBarChart";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { chartSelectOptions } from "src/presentation/data/data";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import RealtimeFilterSelect from "src/presentation/components/common/select/RealtimeFilterSelect";

function TemperatureBarChart() {
  const [chartSelectValue, setChartSelectValue] = useState<PeriodTypes>("1y");
  const { barChartData } = useBarChart(chartSelectValue);

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>نمودار دمای اتاق</SectionTitle>
        <RealtimeFilterSelect
          options={chartSelectOptions}
          value={chartSelectValue}
          setValue={setChartSelectValue}
        />
      </HeaderContainer>
      <MainContainer>
        <BarChartjs data={barChartData} />
      </MainContainer>
    </SectionContainer>
  );
}

export default TemperatureBarChart;
