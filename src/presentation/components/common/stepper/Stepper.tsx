import { useState } from "react";
import AccessType from "./AccessType";
import SensorSelection from "./SensorSelection";
import ServerRoomSelection from "./ServerRoomSelection";
import Stepbar from "./Stepbar";
import { serverRoomItems } from "src/presentation/data/data";
import { StepperForm } from "./Stepper.styles";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues } from "./IStepper";

const steps = ["نوع دسترسی", "اتاق سرور", "انتخاب سنسور"];

function Stepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [accessTypesChecked, setAccessTypesChecked] = useState<
    Record<string, boolean>
  >({
    panels: false,
    sensors: false,
  });
  
  const defaultServerRooms = serverRoomItems.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {} as Record<string, boolean>);

  // console.log(accessServerRoom)

  const methods = useForm<FormValues>({
    defaultValues: {
      accessTypes: {
        panels: false,
        sensors: false,
      },
      serverRooms: defaultServerRooms,
      sensors: [],
    },
  });

  const { handleSubmit } = methods;

  // const handleAccessTypes = (key: string) => {
  //   setAccessTypesChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  // const handleServerRoomAccess = (key: string) => {
  //   setAccessServerRoom((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <StepperForm onSubmit={handleSubmit(onSubmit)}>
        <Stepbar
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        {activeStep === 0 && (
          <AccessType
          // accessTypesChecked={accessTypesChecked}
          // handleAccessTypes={handleAccessTypes}
          />
        )}

        {activeStep === 1 && (
          <ServerRoomSelection
          // accessServerRoom={accessServerRoom}
          // handleServerRoomAccess={handleServerRoomAccess}
          />
        )}

        {activeStep === 2 && <SensorSelection />}
      </StepperForm>
    </FormProvider>
  );
}

export default Stepper;
