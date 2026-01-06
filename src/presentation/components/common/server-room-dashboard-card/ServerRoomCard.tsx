import { Box, useTheme } from "@mui/material";

import BaseDashboardCard from "@/presentation/components/common/dashboard-card/BaseDashboardCard";
import {
  StatsContainer,
  Text,
  TextSpan,
  TitleContainer,
} from "@/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { Icon } from "../icons/components/Icon";
import { IconWrapper } from "../icons/IconWrapper.style";
import { ServerRoomCardProps } from "./IServerRoomCard";

const ServerRoomCard = ({
  title,
  icon,
  city,
  sensor = 0,
  rack = 0,
  onHandleClick,
}: ServerRoomCardProps) => {
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  return (
    <BaseDashboardCard
      onHandleClick={onHandleClick}
      width="220px"
      topContent={
        <TitleContainer>
          <IconWrapper>
            <Icon
              name={icon}
              w={isMediumScreen ? 24 : 20}
              h={isMediumScreen ? 24 : 20}
              // @ts-ignore
              color={theme.palette.primary[200]}
            />
          </IconWrapper>
          <Box sx={{ overflow: "hidden", maxWidth: "130px" }}>
            <TextSpan color="neutral.100" variant="body1">
              {title}
            </TextSpan>
            <Text color="neutral.200" variant="body2">
              {city}
            </Text>
          </Box>
        </TitleContainer>
      }
      bottomContent={
        <StatsContainer>
          <Text color="neutral.200" variant="body2">
            <Icon
              name="bullet"
              w={12}
              h={12}
              // @ts-ignore
              color={theme.palette.primary[300]}
            />
            {rack} رک
          </Text>
          <Text color="neutral.200" variant="body2">
            <Icon
              name="bullet"
              w={12}
              h={12}
              // @ts-ignore
              color={theme.palette.secondary[300]}
            />
            {sensor} سنسور
          </Text>
        </StatsContainer>
      }
    />
  );
};

export default ServerRoomCard;
