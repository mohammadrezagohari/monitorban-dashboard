import { useMediaQuery, useTheme } from "@mui/material";

import useLatestUsers from "./useLatestUsers";

import Button from "@/presentation/components/common/buttons/Button";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import UserCardMini from "@/presentation/feature/dashboard/components/latest-users/user-card-mini/UserCardMini";
import { StyledMainContainer } from "./LatestUser.styles";

function LatestUsers() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { users } = useLatestUsers();

  return (
    <SectionContainer width="100%" height={246}>
      <HeaderContainer>
        <SectionTitle>آخرین کاربران</SectionTitle>

        {isDesktop ? (
          <Button
            variant="outlined"
            size="xxsmall"
            colorType="primary"
            leftIcon="arrowLeft"
            onClick={() => console.log("آخرین کاربران")}
          >
            مشاهده همه
          </Button>
        ) : (
          <IconButton iconName="eye" variant="outlined" />
          // <IconButtonWithBorder>
          //   <EyeIcon size={16} color={theme.palette.primary.dark} />
          // </IconButtonWithBorder>
        )}
      </HeaderContainer>
      <StyledMainContainer>
        {users &&
          users.map((user) => <UserCardMini key={user.id} user={user} />)}
      </StyledMainContainer>
    </SectionContainer>
  );
}

export default LatestUsers;
