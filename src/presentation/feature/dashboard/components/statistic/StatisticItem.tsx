import { Typography, useTheme } from "@mui/material";

import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
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
      <MainContainer
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SectionTitle>{title}</SectionTitle>
        <StatisticValue variant="caption">{value}</StatisticValue>

        <StyledDetailsContainer>
          {isIncrese ? (
            <ArrowUpIcon color={theme.palette.neutral[100]} size={16} />
          ) : (
            <ArrowDownIcon color={theme.palette.neutral[100]} size={16} />
          )}
          <Typography
            variant="body2"
            sx={{
              color: isIncrese ? "success.main" : "error.main",
              fontSize: { xs: 12, md: 14 },
            }}
          >
            {diferentValue}
            {isIncrese ? "+" : "-"}
          </Typography>
          <Typography
            variant="body2"
            color="neutral.200"
            sx={{ fontSize: { xs: 12, md: 14 } }}
          >
            {isIncrese ? "اضافه" : "کم"} شده
          </Typography>
        </StyledDetailsContainer>
      </MainContainer>
    </StyledStatisticItem>
  );
}
