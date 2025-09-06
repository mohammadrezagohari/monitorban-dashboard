import { useState } from "react";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { serverRoomItems } from "src/presentation/data/data";
import { StyledAddAccessesContainer } from "./AddAccesses.styles";
import Stepper from "src/presentation/components/common/stepper/Stepper";

export default function AddAccesses() {
  return (
    <>
      <PageTitle title="افزودن دسترسی" />

      <StyledAddAccessesContainer>
        <Stepper />
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
