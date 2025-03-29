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
