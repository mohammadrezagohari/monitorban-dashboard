import AccessItem from "./AccessItem";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { AccessTypeMainContainer } from "./Stepper.styles";

function AccessType({ accessTypesChecked, handleAccessTypes }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>نوع دسترسی را انتخاب کنید</SectionTitle>
      </HeaderContainer>
      <AccessTypeMainContainer>
        <AccessItem
          item={{
            title: "دسترسی به بخش های مختلف پنل",
            icon: "homeIcon",
          }}
          checked={accessTypesChecked.panels}
          onChange={() => handleAccessTypes("panels")}
        />
        <AccessItem
          item={{
            title: "دسترسی به سنسور های مختلف",
            icon: "sensorIcon",
          }}
          checked={accessTypesChecked.sensors}
          onChange={() => handleAccessTypes("sensors")}
        />
      </AccessTypeMainContainer>
    </SectionContainer>
  );
}

export default AccessType;
