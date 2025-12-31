import { useMediaQuery, useTheme } from "@mui/material";
import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import {
  DataContainer,
  getStatusColors,
  Text,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { IconWrapper } from "../icons/IconWrapper.style";
import { Icon } from "../icons/components/Icon";
import { TemperatureCardProps } from "./ITemperatureCard";

const TemperatureCard = ({
  status = "default", // default, accept, warning, danger
  name,
  icon,
  percentData,
  incrementData,
  decrementData,
  hour,
}: TemperatureCardProps) => {
  // const iconColor =
  //   status === "accept"
  //     ? "#0B9D4E"
  //     : status === "danger"
  //     ? "#D02224"
  //     : status === "warning"
  //     ? "#F6C000"
  //     : "#F7F5FA26";
  // const textColor =
  //   status === "accept"
  //     ? "#0FD36A"
  //     : status === "danger"
  //     ? "#E8383B"
  //     : status === "warning"
  //     ? "#F6C000"
  //     : "#8C32D9"; //TODO:: color should be changed

  const { icon: iconBgColor, text: textColor } = getStatusColors(status);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <BaseDashboardCard
      // width="350px"
      topContent={
        <DataContainer>
          <Text
            color="neutral.100"
            variant={isDesktop ? "body1" : "body2"}
            component="h5"
          >
            <IconWrapper bgcolor={iconBgColor}>
              <Icon name={icon} />
            </IconWrapper>
            {name}:
          </Text>
          <Text
            variant={isDesktop ? "body1" : "body2"}
            component="span"
            color={textColor}
          >
            {percentData}%
          </Text>
        </DataContainer>
      }
      bottomContent={
        <>
          <DataContainer sx={{ mb: 1 }}>
            <Text
              color="neutral.200"
              variant={isDesktop ? "body2" : "caption"}
              component="span"
            >
              <Icon name="bullet" color={textColor} /> آخرین مقدار دریافتی:
            </Text>
            <Text
              color="neutral.200"
              variant={isDesktop ? "body2" : "caption"}
              component="span"
            >
              {hour} ساعت پیش
            </Text>
          </DataContainer>
          <DataContainer>
            <Text
              color="neutral.200"
              variant={isDesktop ? "body2" : "caption"}
              component="span"
            >
              <Icon name="bullet" color={textColor} /> دیتا سنتر دانشگاه:
            </Text>
            <Text
              color="neutral.200"
              variant={isDesktop ? "body2" : "caption"}
              component="span"
              sx={{ gap: "1.5rem" }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "2px",
                }}
              >
                <Icon
                  name="arrowDownIos"
                  w={16}
                  h={16}
                  color={theme.palette.error.main}
                />
                {decrementData}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "2px",
                }}
              >
                {incrementData}
                <Icon
                  name="arrowUpIos"
                  w={16}
                  h={16}
                  color={theme.palette.success.main}
                />
              </span>
            </Text>
          </DataContainer>
        </>
      }
    />
  );
};

export default TemperatureCard;
