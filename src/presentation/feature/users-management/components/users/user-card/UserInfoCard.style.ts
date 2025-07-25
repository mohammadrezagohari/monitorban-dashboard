import { Box, styled } from "@mui/material"
import { Children } from "react"

export const getServerRoomListCardStatus = (status: "normal" | "warning" | "error") => {
  const styles = {
    normal: {
      text: "نرمال",
      textColor: "#0FD36A", // "success.main"
      bgColor: "#42594B", // "success.700"
    },
    warning: {
      text: "اخطار",
      textColor: "#F6C000", // "warning.500"
      bgColor: "#292000", // "warning.800"
    },
    error: {
      text: "بحرانی",
      textColor: "#E8383B", // "error.main"
      bgColor: "#290607", // "error.800"
    },
  }
  return styles[status]
}

export const StyledUserInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral[600],
  padding: "0.75rem",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  gap: 24,

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    display: "grid",
    gap: 16,
    gridTemplateColumns: "auto 110px",
    padding: "1rem",
  }
}))

export const StyledDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  width: "100%",
  // flexDirection: { xs: "column", md: "row" },
  // alignItems: { xs: "flex-start", md: "center" },

  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}))

export const ButtonsContainer = styled(Box)(({ theme, children }) => ({
  display: "flex",
  alignItems: "center",
  gap: Children.count(children) > 1 ? theme.spacing(2) : 0
}))