import { ArrowLeftIcon } from "src/presentation/components/common/icons/ArrowLeftIcon";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { UserCardProps } from "./IUserCard";
import { StyledUserCard } from "./UserCard.style";
import { usersInfo } from "../test/data";
import { useTheme } from '@mui/material/styles';

const UserCard: React.FC<UserCardProps> = ({ avatar, fullName, position }) => {
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
        <IconButton>
          <ArrowLeftIcon color={theme.palette.neutral.main} size={20} />
        </IconButton>
      </Box>
    </StyledUserCard>
  );
};

export default UserCard;
