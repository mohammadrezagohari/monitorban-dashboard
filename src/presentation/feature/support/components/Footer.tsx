import { Icon } from "@/presentation/components/common/icons/components/Icon";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { Box, Typography } from "@mui/material";
import { StyledFooter } from "./FAQ.styles";

function Footer() {
  const { isMediumScreen } = useScreenSize();

  return (
    <StyledFooter>
      <Typography>
        همچنین می توانید جهت ارتباط سریع تر با این شماره تماس بگیرید
      </Typography>

      <Box>
        <Typography id="phone-number">011 - 3335 4585</Typography>
        <Icon
          name="call"
          w={isMediumScreen ? 24 : 20}
          h={isMediumScreen ? 24 : 20}
        />
      </Box>
    </StyledFooter>
  );
}

export default Footer;
