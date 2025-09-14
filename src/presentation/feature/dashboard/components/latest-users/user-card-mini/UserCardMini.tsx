import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";

import { UserCardProps } from "./IUserCardMini";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { StyledUserCard } from "./UserCardMini.style";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";
import Avatar from "src/presentation/components/common/avatar/Avatar";

const UserCardMini: React.FC<UserCardProps> = ({ user }) => {
  const theme = useTheme();
  const { image, fullName, position } = user;

  return (
    <StyledUserCard>
      {
        // image?.startsWith()
        <Avatar src={image}>
          <UserIcon color={theme.palette.neutral.main} />
        </Avatar>
      }
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            overflow: "hidden",
            maxWidth: "min(136px, 1fr)",
          }}
        >
          <Typography
            variant="body1"
            color="neutral.main"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {fullName}
          </Typography>
          <Typography variant="caption" color="neutral.300">
            {position}
          </Typography>
        </Box>
        <IconButton sx={{ p: 0 }}>
          <ArrowLeftIcon color={theme.palette.neutral.main} size={20} />
        </IconButton>
      </Box>
    </StyledUserCard>
  );
};

export default UserCardMini;
