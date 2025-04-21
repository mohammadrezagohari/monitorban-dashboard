import { ArrowUpIcon } from "src/presentation/components/common/icons/ArrowUpIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import { Typography } from "@mui/material";

interface IStatistic{
    title:string
    value?:number
    isIncrese:boolean
    diferentValue?:number
}


export default function Statistic({ title, value, isIncrese, diferentValue }:IStatistic) {

    return (
    <SectionContainer width="100%" height={184}>
      <HeaderContainer>
        <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
          {title}
        </Typography>
      </HeaderContainer>
      <MainContainer>
        <Typography variant="h1" color="#C480FF" lineHeight={1.6}>
          {value}
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {isIncrese ? (
            <ArrowUpIcon color="#D5D0DB" />
          ) : (
            <ArrowDownIcon color="#D5D0DB" />
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
              color={isIncrese ? "#0FD36A" : "#E8383B"}
            >
              {diferentValue}
              {isIncrese ? "+" : "-"}
            </Typography>
            <Typography variant="body2" color="#B7B0BF">
              {isIncrese ? "اضافه" : "کم"} شده
            </Typography>
          </div>
        </div>
      </MainContainer>
    </SectionContainer>
  );
}
