import { CallIcon } from "src/presentation/assets/icons/CallIcon";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { StyledFooter } from "./FAQ.styles";

function Footer() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledFooter>
      <Typography 
      // fontSize="inherit"
      >
        همچنین می توانید جهت ارتباط سریع تر با این شماره تماس بگیرید
      </Typography>

      <Box>
        <Typography id="phone-number">011 - 3335 4585</Typography>
        <CallIcon size={isDesktop ? 24 : 20} />
      </Box>
    </StyledFooter>
  );
}

export default Footer;
