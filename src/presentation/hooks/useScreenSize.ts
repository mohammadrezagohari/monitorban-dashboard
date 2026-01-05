import { useMediaQuery, useTheme } from "@mui/material"

const useScreenSize = () => {
    const theme = useTheme();
    const isDeskto = useMediaQuery(theme.breakpoints.up("md"));

    return { isDeskto };
}

export default useScreenSize;