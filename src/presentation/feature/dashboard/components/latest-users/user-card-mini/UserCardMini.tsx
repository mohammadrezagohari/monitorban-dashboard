import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";

import Avatar from "src/presentation/components/common/avatar/Avatar";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";
import { UserCardProps } from "./IUserCardMini";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
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
