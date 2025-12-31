import { useNavigate } from "react-router-dom";

import { LogoutButton } from "src/presentation/components/common/buttons/LogoutButton";
import Divider from "src/presentation/components/common/divider/Divider";
import { Icon } from "src/presentation/components/common/icons/components/Icon";
import { StyledUserAccountCard } from "./UserAccountCard.styles";
import { UserProfileContainers } from "./UserProfileContainer";

const UserAccountCard = () => {
  const navigate = useNavigate();

  const handleLogoutAccount = () => {
    // logic of removed active account and logout

    navigate("/login");
  };

  return (
    <StyledUserAccountCard>
      <UserProfileContainers />
      <Divider />
      <LogoutButton onClick={handleLogoutAccount} disableRipple>
        <Icon name="login" w={16} h={16} />
        خروج از حساب
      </LogoutButton>
    </StyledUserAccountCard>
  );
};

export default UserAccountCard;
