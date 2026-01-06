import { useTheme } from "@mui/material";

import Button from "@/presentation/components/common/buttons/Button";
import LinearCard from "@/presentation/components/common/linear-card/LinearCard";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { SectionHeader } from "../../ContentManagementPage.styles";
import { StyledSettingsMainSection } from "./MessagesSettings.styles";

function MessagesSettings() {
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  return (
    <SectionContainer sx={{ flex: 1 }}>
      <SectionHeader>
        <SectionTitle>پیغام ها</SectionTitle>
        <Button
          variant="outlined"
          size={isMediumScreen ? "large" : "xxsmall"}
          colorType="primary"
        >
          ذخیره
        </Button>
      </SectionHeader>

      <StyledSettingsMainSection>
        <LinearCard
          color={theme.palette.success.main}
          icon="tickCircle"
          iconColor={theme.palette.neutral.main}
        >
          نرمال
        </LinearCard>

        <LinearCard
          //@ts-ignore
          color={theme.palette.warning[500]}
          iconColor={theme.palette.neutral.main}
          icon="danger"
        >
          اخطار
        </LinearCard>

        <LinearCard
          color={theme.palette.error.main}
          icon="closeCircle"
          iconColor={theme.palette.neutral.main}
        >
          بحرانی
        </LinearCard>
      </StyledSettingsMainSection>
    </SectionContainer>
  );
}

export default MessagesSettings;
