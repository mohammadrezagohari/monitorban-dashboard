import { useMediaQuery, useTheme } from "@mui/material"

const useScreenSize = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

    return { isLargeScreen, isMediumScreen };
}

export default useScreenSize;