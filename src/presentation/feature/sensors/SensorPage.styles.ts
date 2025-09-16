import { Box, styled } from "@mui/material"
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer"
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles"

export const StyledSensorPage = styled(SectionContainer)(({ theme }) => ({
    overflow: "visible"
}))

export const StyledSensorsMainContainer = styled(MainContainer)(({ theme }) => ({
    overflow: "visible"
}))

export const FilterBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    position: "relative",
}))