import { useMediaQuery, useTheme } from "@mui/material";

import useLatestUsers from "./useLatestUsers";

import Button from "src/presentation/components/common/buttons/Button";
import { EyeIcon } from "src/presentation/assets/icons/EyeIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import UserCardMini from "src/presentation/feature/dashboard/components/latest-users/user-card-mini/UserCardMini";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledMainContainer } from "./LatestUser.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

function LatestUsers() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { users } = useLatestUsers();
  console.log(users);

  return (
    <SectionContainer width="100%" height={246}>
      <HeaderContainer>
        <SectionTitle>آخرین کاربران</SectionTitle>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {isDesktop ? (
            <Button
              variant="outlined"
              size="xxsmall"
              colorType="primary"
              endIcon={<ArrowLeftIcon size={16} />}
              onClick={() => console.log("آخرین کاربران")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButtonWithBorder>
              <EyeIcon size={16} color={theme.palette.primary.dark} />
            </IconButtonWithBorder>
          )}
        </div>
      </HeaderContainer>
      <StyledMainContainer>
        {users &&
          users.map((user) => <UserCardMini key={user.id} user={user} />)}
      </StyledMainContainer>
    </SectionContainer>
  );
}

export default LatestUsers;
