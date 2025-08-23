import { Controller, useFormContext } from "react-hook-form";

import AccessItem from "./AccessItem";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { FormValues } from "./IStepper";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { AccessTypeMainContainer } from "./Stepper.styles";

function AccessType() {
  // { accessTypesChecked, handleAccessTypes }
  const { control } = useFormContext<FormValues>();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>نوع دسترسی را انتخاب کنید</SectionTitle>
      </HeaderContainer>
      <AccessTypeMainContainer>
        <Controller
          name="accessTypes.panels"
          control={control}
          render={({ field }) => (
            <AccessItem
              item={{
                title: "دسترسی به بخش های مختلف پنل",
                icon: "homeIcon",
              }}
              checked={field.value ?? false}
              onChange={() => field.onChange(!field.value)}
            />
          )}
        />
        <Controller
          name="accessTypes.sensors"
          control={control}
          render={({ field }) => (
            <AccessItem
              item={{
                title: "دسترسی به سنسور های مختلف",
                icon: "sensorIcon",
              }}
              checked={field.value ?? false}
              onChange={() => field.onChange(!field.value)}
            />
          )}
        />
      </AccessTypeMainContainer>
    </SectionContainer>
  );
}

export default AccessType;
