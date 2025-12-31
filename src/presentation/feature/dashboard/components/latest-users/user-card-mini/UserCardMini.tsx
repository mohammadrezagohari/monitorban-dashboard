import { IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Icon } from "src/presentation/components/common/icons/components/Icon";
import Avatar from "src/presentation/components/common/avatar/Avatar";
import { UserCardProps } from "./IUserCardMini";
import { StyledUserCard, StyledUserDetails } from "./UserCardMini.style";

const UserCardMini: React.FC<UserCardProps> = ({ user }) => {
  const theme = useTheme();
  const { image, fullName, position } = user;

  return (
    <StyledUserCard>
      <Avatar src={image}>
        <Icon name="user" color={theme.palette.neutral.main} />
      </Avatar>

      <StyledUserDetails>
        <Typography id="user-name">{fullName}</Typography>
        <Typography id="user-position">{position}</Typography>
      </StyledUserDetails>

      <IconButton sx={{ p: 0, marginInlineStart: "auto" }}>
        <Icon
          name="arrowLeft"
          color={theme.palette.neutral.main}
          w={20}
          h={20}
        />
      </IconButton>
    </StyledUserCard>
  );
};

export default UserCardMini;
