import { useMoveBack } from "@/presentation/hooks/useMoveBack";

import { BackButton } from "@/presentation/components/common/buttons/BackButton";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { useTheme } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { StyledHeader, VerticalDivider } from "./Header.styles";

function Header() {
  const moveBack = useMoveBack();
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  return (
    <StyledHeader>
      {isMediumScreen && (
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
