import { Box, styled } from "@mui/material";
import { createContext } from "react";
import { StyledBox, StyledSensorCard } from "./Sensors.styles";

const SensorContext = createContext({});

function SensorCard({ children, sensor }) {
  return (
    <SensorContext.Provider value={{ sensor }}>
      <StyledSensorCard>{children}</StyledSensorCard>
    </SensorContext.Provider>
  );
}

function Header({ children }) {
  return <StyledBox>{children}</StyledBox>;
}

function DataDetail({ children }) {
  return <StyledBox>{children}</StyledBox>;
}

function Divider({ children }) {
  return children;
}

SensorCard.Header = Header;
SensorCard.Divider = Divider;
SensorCard.DataDetail = DataDetail;

export default SensorCard;
