import { styled } from "@mui/material";

export const VisuallHiddenInput = styled("input")({
  clip: "rect(0, 0, 0, 0)",
  clipPath: "inset(50%)",
  height: 1,
  width: 1,
  position: "absolute",
  bottom: 0,
  left: 0,
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
});