import { IconButton, Typography, useTheme } from "@mui/material";

import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { UserDetail, UserInfo } from "./UserAccountCard.styles";
import Avatar from "src/presentation/components/common/avatar/Avatar";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";

const TEST_USER = {
  image: "/assets/images/profile-images/image.webp",
  fullName: "علی اسدپور",
  position: "اپراتور آی تی",
};

export const UserProfileContainers = () => {
  const theme = useTheme();
  const { image, fullName, position } = TEST_USER;

  return (
    <UserDetail>
      <Avatar src={image}>
        <UserIcon color={theme.palette.neutral.main} />
      </Avatar>
      <UserInfo>
        <Typography variant="body2" color="neutral.main">
          {fullName}
        </Typography>
        <Typography variant="overline" color="neutral.300">
          {position}
        </Typography>
      </UserInfo>
      <IconButton sx={{ mr: "auto" }}>
        <ArrowDownIcon color={theme.palette.neutral.main} size={20} />
      </IconButton>
    </UserDetail>
  );
};
