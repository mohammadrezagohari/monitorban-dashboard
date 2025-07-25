import { Box, styled } from "@mui/material";
import { createContext } from "react";

const StyledSensorCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral[600],
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  padding: "16px",
  width: 350,
  border: `1px solid transparent`,
  "&:hover": {
    borderColor: theme.palette.neutral[300],
  },
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const SensorContext = createContext();

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
