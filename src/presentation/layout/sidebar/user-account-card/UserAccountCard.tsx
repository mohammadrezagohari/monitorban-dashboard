import { useNavigate } from "react-router-dom";

import { LoginIcon } from "src/presentation/assets/icons/LoginIcon";
import Divider from "src/presentation/components/common/divider/Divider";
import { LogoutButton } from "src/presentation/components/common/buttons/LogoutButton";
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
      <LogoutButton
        startIcon={<LoginIcon />}
        onClick={handleLogoutAccount}
        disableRipple
      >
        خروج از حساب
      </LogoutButton>
    </StyledUserAccountCard>
  );
};

export default UserAccountCard;
