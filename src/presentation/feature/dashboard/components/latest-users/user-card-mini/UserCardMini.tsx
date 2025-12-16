import { IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";
import Avatar from "src/presentation/components/common/avatar/Avatar";
import { UserCardProps } from "./IUserCardMini";
import { StyledUserCard, StyledUserDetails } from "./UserCardMini.style";

const UserCardMini: React.FC<UserCardProps> = ({ user }) => {
  const theme = useTheme();
  const { image, fullName, position } = user;

  return (
    <StyledUserCard>
      <Avatar src={image}>
        <UserIcon color={theme.palette.neutral.main} />
      </Avatar>

      <StyledUserDetails>
        <Typography id="user-name">{fullName}</Typography>
        <Typography id="user-position">{position}</Typography>
      </StyledUserDetails>

      <IconButton sx={{ p: 0, marginInlineStart: "auto" }}>
        <ArrowLeftIcon color={theme.palette.neutral.main} size={20} />
      </IconButton>
    </StyledUserCard>
  );
};

export default UserCardMini;
