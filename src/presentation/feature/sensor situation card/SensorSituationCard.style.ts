import { Box, styled, Typography } from "@mui/material"
import { IconWrapperProps, TextProps } from "./ISensorSituationCard"

export const DataContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))

export const Text = styled(Typography)<TextProps>(({ color, fontStyle }) => ({
    variant: fontStyle,
    color: color,
    display: "flex",
    alignItems: "center",
    gap: "8px",
}))

export const IconWrapper = styled(Box)<IconWrapperProps>(({ theme, bgColor }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
    padding: "12px",
    borderRadius: "50px",
    width: "24px",
    height: "24px",
}))

export const DetailContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))


