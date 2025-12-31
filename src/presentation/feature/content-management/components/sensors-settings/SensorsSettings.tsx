import { useNavigate } from "react-router-dom";

import { useMediaQuery, useTheme } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
import { GridBox } from "src/presentation/components/common/GridBox";
import LinearCard from "src/presentation/components/common/linear-card/LinearCard";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { sensorsSettingItems } from "src/presentation/data/data";
import { SectionHeader } from "../../ContentManagementPage.styles";

function SensorsSettings() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleCreateSensor() {
    navigate("create-sensor");
  }
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>تنظیم سنسورها</SectionTitle>
        <Button
          variant="outlined"
          size={isDesktop ? "large" : "xxsmall"}
          colorType="primary"
          rightIcon="plus"
          onClick={handleCreateSensor}
        >
          افرودن سنسور جدید
        </Button>
      </SectionHeader>

      <MainContainer>
        <GridBox>
          {sensorsSettingItems.map((item) => {
            const { id, name, icon, iconColor } = item;
            return (
              <LinearCard key={id} color={iconColor} icon={icon}>
                {name}
              </LinearCard>
            );
          })}
        </GridBox>
      </MainContainer>
    </SectionContainer>
  );
}

export default SensorsSettings;
