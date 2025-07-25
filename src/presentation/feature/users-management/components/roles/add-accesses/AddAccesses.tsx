import { useState } from "react";

import Stepbar from "./Stepbar";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import AccessType from "./AccessType";
import SensorSelection from "./SensorSelection";
import { AccessTypeKey } from "./IAddAccesses";
import ServerRoomSelection from "./ServerRoomSelection";
import { serverRoomItems } from "src/presentation/data/data";
import { StyledAddAccessesContainer } from "./AddAccesses.styles";

const steps = ["نوع دسترسی", "اتاق سرور", "انتخاب سنسور"];

export default function AddAccesses() {
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
      <PageTitle title="افزودن دسترسی" />

      <StyledAddAccessesContainer>
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
      </StyledAddAccessesContainer>
    </>
  );
}

/* <SensorTree /> */

/* <SimpleTreeView>
                <TreeItem itemId="item1" label="Item 1">
                  <TreeItem itemId="item1-1" label="Item 1-1" />
                  <TreeItem itemId="item1-2" label="Item 1-2" />
                </TreeItem>
                <TreeItem itemId="item2" label="Item 2" />
                <TreeItem itemId="item3" label="Item 3" />
              </SimpleTreeView> */

// function SensorTree() {
//   // {data, checked, onToggle}
//   return (
//     // <SimpleTreeView>
//     //   {sensorsTreeItem.map((item) => (
//     //     <TreeItem itemId={item.id} label={item.sensorName}>
//     //       {item.sensors.map((sensor) => (
//     //         <TreeItem itemId={sensor.id} label={sensor.name} />
//     //       ))}
//     //     </TreeItem>
//     //   ))}
//     // </SimpleTreeView>
//     <SimpleTreeView>
//       <TreeItem itemId="grid" label="Mahyar">
//         <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
//         <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
//         <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
//       </TreeItem>
//       <TreeItem itemId="pickers" label="Date and Time Pickers">
//         <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
//         <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
//       </TreeItem>
//       <TreeItem itemId="charts" label="Charts">
//         <TreeItem itemId="charts-community" label="@mui/x-charts" />
//       </TreeItem>
//       <TreeItem itemId="tree-view" label="Tree View">
//         <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
//       </TreeItem>
//     </SimpleTreeView>
//   );
// }
