import { Typography, useTheme } from "@mui/material";

import { Icon } from "src/presentation/components/common/icons/components/Icon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import {
  StatisticValue,
  StyledDetailsContainer,
  StyledStatisticItem,
} from "./Statistic.style";

interface IStatisticItem {
  title: string;
  value?: number;
  isIncrese: boolean;
  diferentValue?: number;
}

export default function StatisticItem({
  title,
  value,
  isIncrese,
  diferentValue,
}: IStatisticItem) {
  const theme = useTheme();

  return (
    <StyledStatisticItem>
      <SectionTitle>{title}</SectionTitle>
      <StatisticValue variant="caption">{value}</StatisticValue>

      <StyledDetailsContainer>
        <Icon
          name={isIncrese ? "arrowUp" : "arrowDown"}
          color={theme.palette.neutral[100]}
          w={16}
          h={16}
        />
        <Typography
          variant="body2"
          color={isIncrese ? "success.main" : "error.main"}
        >
          {diferentValue}
          {isIncrese ? "+" : "-"}
        </Typography>
        <Typography variant="body2" color="neutral.200">
          {isIncrese ? "اضافه" : "کم"} شده
        </Typography>
      </StyledDetailsContainer>
    </StyledStatisticItem>
  );
}
