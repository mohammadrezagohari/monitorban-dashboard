import StatisticItem from "./StatisticItem";
import { StyledStatisticContainer } from "./Statistic.style";

function Statistic() {
  return (
    <StyledStatisticContainer>
      <StatisticItem
        title="سنسور"
        value={145}
        isIncrese={true}
        diferentValue={3}
      />
      <StatisticItem
        title="کاربر"
        value={31}
        isIncrese={false}
        diferentValue={5}
      />
      <StatisticItem
        title="اتاق سرور"
        value={12}
        isIncrese={true}
        diferentValue={3}
      />
    </StyledStatisticContainer>
  );
}

export default Statistic;
