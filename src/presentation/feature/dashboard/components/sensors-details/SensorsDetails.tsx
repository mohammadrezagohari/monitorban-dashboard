import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import SensorCard from "src/presentation/components/common/sensor-card/SensorCard";
import { EyeIcon } from "src/presentation/assets/icons/EyeIcon";
import Button from "src/presentation/components/common/buttons/Button";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { sensorsItems } from "src/presentation/data/data";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledMainContainer } from "./SensorsDetails.styles";

function SensorsDetails() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ gridRow: "1/3" }}>
      <SectionContainer width="100%" height="446px">
        <HeaderContainer>
          <SectionTitle>سنسورها</SectionTitle>

          {isDesktop ? (
            <Button
              variant="outlined"
              size="xxsmall"
              colorType="primary"
              endIcon={<ArrowLeftIcon />}
              onClick={() => console.log("سنسورها")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.dark}`,
                borderRadius: "10px",
                p: "7px",
              }}
            >
              <EyeIcon size={16} color={theme.palette.primary.dark} />
            </IconButton>
          )}
        </HeaderContainer>
        <StyledMainContainer>
          {sensorsItems.map((item, index) => (
            <SensorCard
              key={index}
              icon={item.icon}
              title={item.name}
              normalSensor={item.normalSensor}
              warningSensor={item.warningSensor}
              dangerSensor={item.dangerSensor}
            />
          ))}
        </StyledMainContainer>
      </SectionContainer>
    </Box>
  );
}

export default SensorsDetails;
