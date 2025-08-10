import { useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import LinearCard from "src/presentation/components/common/linear-card/LinearCard";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { DangerIcon } from "src/presentation/assets/icons/DangerIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { TickCircleIcon } from "src/presentation/assets/icons/TickCircleIcon";
import { CloseCircleIcon } from "src/presentation/assets/icons/CloseCircleIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledSettingsMainSection } from "./MessagesSettings.styles";

function MessagesSettings() {
  const theme = useTheme();

  return (
    <SectionContainer sx={{ flex: 1 }}>
      <HeaderContainer>
        <SectionTitle>پیغام ها</SectionTitle>
        <Button variant="outlined" size="large" colorType="primary">
          ذخیره
        </Button>
      </HeaderContainer>

      <StyledSettingsMainSection>
        <LinearCard
          color={theme.palette.success.main}
          icon={<TickCircleIcon size={24} color={theme.palette.neutral.main} />}
        >
          نرمال
        </LinearCard>

        <LinearCard
          color={theme.palette.warning[500]}
          icon={<DangerIcon size={24} color={theme.palette.neutral.main} />}
        >
          اخطار
        </LinearCard>

        <LinearCard
          color={theme.palette.error.main}
          icon={
            <CloseCircleIcon size={24} color={theme.palette.neutral.main} />
          }
        >
          بحرانی
        </LinearCard>
      </StyledSettingsMainSection>
    </SectionContainer>
  );
}

export default MessagesSettings;
