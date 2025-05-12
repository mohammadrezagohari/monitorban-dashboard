import { ArrowUpIcon } from "src/presentation/components/common/icons/ArrowUpIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import { Typography } from "@mui/material";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";

interface IStatistic {
  title: string;
  value?: number;
  isIncrese: boolean;
  diferentValue?: number;
}

export default function Statistic({
  title,
  value,
  isIncrese,
  diferentValue,
}: IStatistic) {
  return (
    <SectionContainer width="100%" height="100%">
      {/* <HeaderContainer> */}
      {/* <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
          {title}
        </Typography> */}
      {/* </HeaderContainer> */}
      <MainContainer>
        <SectionTitle>{title}</SectionTitle>
        <Typography
          variant="caption"
          color="#C480FF"
          lineHeight={1.6}
          sx={{
            fontSize: { xs: 30, md: 48 },
            fontWeight: { xs: 800, md: 900 },
          }}
        >
          {value}
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: "#D5D0DB",
          }}
        >
          {isIncrese ? (
            <ArrowUpIcon color="#D5D0DB" size={16} />
          ) : (
            <ArrowDownIcon color="#D5D0DB" size={16} />
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: isIncrese ? "#0FD36A" : "#E8383B",
                fontSize: { xs: 12, md: 14 },
              }}
            >
              {diferentValue}
              {isIncrese ? "+" : "-"}
            </Typography>
            <Typography
              variant="body2"
              color="#B7B0BF"
              sx={{ fontSize: { xs: 12, md: 14 } }}
            >
              {isIncrese ? "اضافه" : "کم"} شده
            </Typography>
          </div>
        </div>
      </MainContainer>
    </SectionContainer>
  );
}
