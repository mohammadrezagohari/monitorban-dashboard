import { useState } from "react";
import AccessType from "./AccessType";
import SensorSelection from "./SensorSelection";
import ServerRoomSelection from "./ServerRoomSelection";
import Stepbar from "./Stepbar";
import { serverRoomItems } from "src/presentation/data/data";

const steps = ["نوع دسترسی", "اتاق سرور", "انتخاب سنسور"];

function Stepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [accessTypesChecked, setAccessTypesChecked] = useState<
    Record<string, boolean>
  >({
    panels: false,
    sensors: false,
  });
  const [accessServerRoom, setAccessServerRoom] = useState(
    serverRoomItems.reduce((acc, item) => {
      acc[item.title] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleAccessTypes = (key: string) => {
    setAccessTypesChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleServerRoomAccess = (key: string) => {
    setAccessServerRoom((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <>
      <Stepbar
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />

      {activeStep === 0 && (
        <AccessType
          accessTypesChecked={accessTypesChecked}
          handleAccessTypes={handleAccessTypes}
        />
      )}

      {activeStep === 1 && (
        <ServerRoomSelection
          accessServerRoom={accessServerRoom}
          handleServerRoomAccess={handleServerRoomAccess}
        />
      )}

      {activeStep === 2 && <SensorSelection />}
    </>
  );
}

export default Stepper;
