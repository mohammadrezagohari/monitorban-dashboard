import { IconButton, Typography, useTheme } from "@mui/material";

import { Icon } from "@/presentation/components/common/icons/components/Icon";
import Avatar from "@/presentation/components/common/avatar/Avatar";
import { UserDetail, UserInfo } from "./UserAccountCard.styles";

const TEST_USER = {
  image: "https://i.pravatar.cc/48?img=59",
  fullName: "علیرضا رحیمی",
  position: "اپراتور آی تی",
};

export const UserProfileContainers = () => {
  const theme = useTheme();
  const { image, fullName, position } = TEST_USER;

  return (
    <UserDetail>
      <Avatar src={image}>
        <Icon name="user" color={theme.palette.neutral.main} />
      </Avatar>
      <UserInfo>
        <Typography variant="body2" color="neutral.main">
          {/* TODO:: white-space nowrap */}
          {fullName}
        </Typography>
        <Typography variant="overline" color="neutral.300">
          {position}
        </Typography>
      </UserInfo>
      <IconButton sx={{ mr: "auto" }}>
        <Icon
          name="arrowDown"
          color={theme.palette.neutral.main}
          w={20}
          h={20}
        />
      </IconButton>
    </UserDetail>
  );
};
