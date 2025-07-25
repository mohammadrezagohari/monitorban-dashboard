import { useTheme } from "@mui/material/styles";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

import { UserCardProps } from "./IUserCardMini";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { StyledUserCard } from "./UserCardMini.style";

const UserCardMini: React.FC<UserCardProps> = ({
  avatar,
  fullName,
  position,
}) => {
  const theme = useTheme();
  return (
    <StyledUserCard>
      <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
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
