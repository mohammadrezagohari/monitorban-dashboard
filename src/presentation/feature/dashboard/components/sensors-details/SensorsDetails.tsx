import { Box, useMediaQuery, useTheme } from "@mui/material";

import useSensorsDetail from "./useSensorsDetail";

import Button from "src/presentation/components/common/buttons/Button";
import SensorCard from "src/presentation/components/common/sensor-card/SensorCard";
import { EyeIcon } from "src/presentation/assets/icons/EyeIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledMainContainer } from "./SensorsDetails.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

function SensorsDetails() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { sensorsItems } = useSensorsDetail();

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
              endIcon={<ArrowLeftIcon size={16} />}
              onClick={() => console.log("سنسورها")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButtonWithBorder>
              <EyeIcon size={16} color={theme.palette.primary.dark} />
            </IconButtonWithBorder>
          )}
        </HeaderContainer>
        <StyledMainContainer>
          {sensorsItems &&
            sensorsItems.map((item) => (
              <SensorCard key={item.id} sensor={item} />
            ))}
        </StyledMainContainer>
      </SectionContainer>
    </Box>
  );
}

export default SensorsDetails;
