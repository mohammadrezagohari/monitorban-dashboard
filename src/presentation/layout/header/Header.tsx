import { useMoveBack } from "src/presentation/hooks/useMoveBack";

import { useMediaQuery, useTheme } from "@mui/material";
import { BackButton } from "src/presentation/components/common/buttons/BackButton";
import { Icon } from "src/presentation/components/common/icons/components/Icon";
import Breadcrumbs from "./Breadcrumbs";
import { StyledHeader, VerticalDivider } from "./Header.styles";

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
            // disableRipple
            // disableElevation
          >
            <Icon name="arrowRight" w={20} h={20} />
            بازگشت
          </BackButton>
          <VerticalDivider />
        </>
      )}
      <Breadcrumbs />
    </StyledHeader>
  );
}

export default Header;
