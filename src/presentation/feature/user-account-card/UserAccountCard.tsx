import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import {
  Avatar,
  Box,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import ButtonPrimaryXxsmallText from "../buttons/ButtonPrimaryXxsmallText";
import { LoginIcon } from "src/presentation/components/common/icons/LoginIcon";
import { useNavigate } from "react-router-dom";

// export const ProfileContainer = styled(Box)(() => ({
//   marginBottom: "64px",
//   backgroundColor: "red",
//   height: "113px",
//   borderRadius: "15px",
//   padding: "10px",
// }));

const UserAccountCard = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCloseAccount = () => {
    // logic of removed active account

    navigate("/login");
  };

  const Top = () => {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Avatar src={user.image} sx={{ width: 48, height: 48 }} />
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
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" color="neutral.main">
              {user.fullName}
            </Typography>
            <Typography variant="overline" color="neutral.300">
              {user.position}
            </Typography>
          </Box>
          <IconButton>
            <ArrowDownIcon color={theme.palette.neutral.main} size={20} />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const Bottom = () => {
    return (
      <Box>
        <ButtonPrimaryXxsmallText
          onClick={handleCloseAccount}
          rightIcon={<LoginIcon />}
        >
          خروج از حساب
        </ButtonPrimaryXxsmallText>
      </Box>
    );
  };

  return <BaseDashboardCard topContent={<Top />} bottomContent={<Bottom />} />;
};

export default UserAccountCard;
