import { useState } from "react";

import useBarChart from "./useBarChart";

import BarChartjs from "@/presentation/feature/dashboard/components/bar-chart/BarChartjs";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { PeriodTypes } from "./ITemperatureBarChart";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import RealtimeFilterSelect from "@/presentation/components/common/select/RealtimeFilterSelect";
import { chartSelectOptions } from "@/presentation/data/data";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";

const periodOptions: PeriodTypes[] = ["1d", "1m", "3m", "6m", "1y"] as const;

type PeriodT = (typeof periodOptions)[number];

function TemperatureBarChart() {
  const [chartSelectValue, setChartSelectValue] = useState<PeriodT>("1y");
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
