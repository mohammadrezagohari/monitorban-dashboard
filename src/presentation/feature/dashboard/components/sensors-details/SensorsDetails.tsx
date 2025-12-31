import { useMediaQuery, useTheme } from "@mui/material";

import useSensorsDetail from "./useSensorsDetail";

import Button from "src/presentation/components/common/buttons/Button";
import IconButton from "src/presentation/components/common/icon-button/IconButton";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SensorCard from "src/presentation/components/common/sensor-card/SensorCard";
import { StyledMainContainer, StyledSensorCard } from "./SensorsDetails.styles";

function SensorsDetails() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { sensorsItems } = useSensorsDetail();

  return (
    <StyledSensorCard>
      <SectionContainer width="100%" height="446px">
        <HeaderContainer>
          <SectionTitle>سنسورها</SectionTitle>

          {isDesktop ? (
            <Button
              variant="outlined"
              size="xxsmall"
              colorType="primary"
              leftIcon="arrowLeft"
              onClick={() => console.log("سنسورها")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButton iconName="eye" variant="outlined" />
            // <IconButtonWithBorder>
            //   <EyeIcon size={16} color={theme.palette.primary.dark} />
            // </IconButtonWithBorder>
          )}
        </HeaderContainer>
        <StyledMainContainer>
          {sensorsItems &&
            sensorsItems.map((item) => (
              <SensorCard key={item.id} sensor={item} />
            ))}
        </StyledMainContainer>
      </SectionContainer>
    </StyledSensorCard>
  );
}

export default SensorsDetails;
