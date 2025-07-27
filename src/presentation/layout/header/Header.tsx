import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useMoveBack } from "src/presentation/hooks/useMoveBack";

import { BackButton } from "src/presentation/components/common/buttons/BackButton";
import { ArrowRightIcon } from "src/presentation/assets/icons/ArrowRightIcon";
import { useMediaQuery, useTheme } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { StyledHeader } from "./Header.styles";
import BaseBreadCrumb from "src/presentation/feature/old/breadcrumb/BaseBreadcrumb";

function Header() {
  const moveBack = useMoveBack();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledHeader>
      {isDesktop && (
        <>
          <BackButton
            onClick={moveBack}
            startIcon={<ArrowRightIcon size={20} />}
            // disableRipple
            // disableElevation
          >
            بازگشت
          </BackButton>
          <Box
            sx={{
              width: "4px",
              height: "20px",
              borderRadius: "2px",
              bgcolor: "grey",
            }}
          />
        </>
      )}
      <Breadcrumbs />
      {/* <BaseBreadCrumb /> */}
    </StyledHeader>
  );
}

export default Header;
