import { useNavigate } from "react-router-dom";

import Button from "src/presentation/components/common/buttons/Button";
import LinearCard from "src/presentation/components/common/linear-card/LinearCard";
import { GridBox } from "src/presentation/components/common/GridBox";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { sensorsSettingItems } from "src/presentation/data/data";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

function SensorsSetting() {
  const navigate = useNavigate();

  function handleCreateSensor() {
    navigate("create-sensor");
  }
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>تنظیم سنسورها</SectionTitle>
        <Button
          variant="outlined"
          size="large"
          colorType="primary"
          startIcon={<PlusIcon size={24} />}
          onClick={handleCreateSensor}
        >
          افرودن سنسور جدید
        </Button>
      </HeaderContainer>

      <MainContainer>
        <GridBox>
          {sensorsSettingItems.map((item) => {
            const { id, name, icon, iconColor } = item;
            const ItemIcon = iconsMap[icon as keyof typeof iconsMap];
            return (
              <LinearCard
                key={id}
                color={iconColor}
                icon={<ItemIcon color="#0E0C15" size={24} />}
              >
                {name}
              </LinearCard>
            );
          })}
        </GridBox>
      </MainContainer>
    </SectionContainer>
  );
}

export default SensorsSetting;
