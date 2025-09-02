import { Avatar as MuiAvatar, Box, styled } from "@mui/material";

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

export const StyledFileUpload = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(6),
  marginInlineStart: theme.spacing(1.25),
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}))

export const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  width: 90,
}))

export const Avatar = styled(MuiAvatar)(() => ({
  width: 48,
  height: 48,
}))