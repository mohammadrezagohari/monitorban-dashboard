import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { Box, Typography } from "@mui/material";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import CustomStepper from "src/presentation/components/common/stepper/CustomStepper";
import { JSX, useState } from "react";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";
import { DashboardIcon } from "src/presentation/components/common/icons/DashboardIcon";
import BaseCheckbox from "../../base-checkbox/BaseCheckbox";
import { SensorIcon } from "src/presentation/components/common/icons/SensorIcon";
import { serverRoomItems } from "../data";
import CustomTreeView from "src/presentation/components/common/TreeView/CustomTreeView";

const steps = ["نوع دسترسی", "اتاق سرور", "انتخاب سنسور"];

export default function AddAccesses() {
  const [activeStep, setActiveStep] = useState(2);
  const [accessTypesChecked, setAccessTypesChecked] = useState({
    panels: false,
    sensors: false,
  });
  const [accessServerRoom, setAccessServerRoom] = useState(
    serverRoomItems.reduce((acc, item) => {
      acc[item.title] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // console.log("accessServerRoom:::", accessServerRoom);

  const handleAccessTypes = (key) => {
    setAccessTypesChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleServerRoomAccess = (key) => {
    setAccessServerRoom((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <PageTitle>افزودن دسترسی</PageTitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <SectionContainer>
          <MainContainer>
            <CustomStepper
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </MainContainer>
        </SectionContainer>

        {activeStep === 0 && (
          <SectionContainer>
            <HeaderContainer>
              <SectionTitle>نوع دسترسی را انتخاب کنید</SectionTitle>
            </HeaderContainer>
            <MainContainer
              color="neutral.main"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              <AccessItem
                title="دسترسی به بخش های مختلف پنل"
                icon={<DashboardIcon />}
                checked={accessTypesChecked.panels}
                onChange={() => handleAccessTypes("panels")}
              />
              <AccessItem
                title="دسترسی به سنسور های مختلف"
                icon={<SensorIcon />}
                checked={accessTypesChecked.sensors}
                onChange={() => handleAccessTypes("sensors")}
              />
            </MainContainer>
          </SectionContainer>
        )}

        {activeStep === 1 && (
          <SectionContainer>
            <HeaderContainer></HeaderContainer>
            <MainContainer
              color="neutral.main"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
              }}
            >
              {serverRoomItems.map((item) => (
                <AccessItem
                  key={item.id}
                  title={item.title}
                  icon={item.icon}
                  city={item.city}
                  checked={accessServerRoom[item.title]}
                  onChange={() => handleServerRoomAccess(item.title)}
                />
              ))}
            </MainContainer>
          </SectionContainer>
        )}

        {activeStep === 2 && (
          <SectionContainer>
            <HeaderContainer>
              <SectionTitle>سنسور مورد نظرتان را انتخاب کنید</SectionTitle>
            </HeaderContainer>
            <MainContainer color="neutral.main">
              {/* <SensorTree /> */}
              {/* <SimpleTreeView>
                <TreeItem itemId="item1" label="Item 1">
                  <TreeItem itemId="item1-1" label="Item 1-1" />
                  <TreeItem itemId="item1-2" label="Item 1-2" />
                </TreeItem>
                <TreeItem itemId="item2" label="Item 2" />
                <TreeItem itemId="item3" label="Item 3" />
              </SimpleTreeView> */}
              <CustomTreeView />
            </MainContainer>
          </SectionContainer>
        )}
      </Box>
    </Box>
  );
}

const AccessItem = ({
  title,
  icon,
  checked,
  onChange,
  city,
}: {
  title: string;
  city?: string;
  icon: JSX.Element;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <Box
      onClick={onChange}
      sx={{
        bgcolor: "#373040",
        borderRadius: "15px",
        cursor: "pointer",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 535,
        border: "1px solid transparent",
        "&:hover": { borderColor: "#9B92A6" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconWrapper>{icon}</IconWrapper>
        <Box>
          <Typography variant="body1" color="neutral.100">
            {title}
          </Typography>
          {city && (
            <Typography variant="body2" color="neutral.200">
              {city}
            </Typography>
          )}
        </Box>
      </Box>

      <Box>
        <BaseCheckbox checked={checked} size={32} />
      </Box>
    </Box>
  );
};

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
