import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { Box, Typography, useTheme } from "@mui/material";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { UsersIcon } from "src/presentation/assets/icons/UsersIcon";
import Button from "src/presentation/components/common/buttons/Button";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { MessageEditIcon } from "src/presentation/assets/icons/MessageEditIcon";
import { TwoUsersIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import { ComplaintIcon } from "src/presentation/assets/icons/ComplaintIcon";
import Divider from "src/presentation/components/common/divider/Divider";
import Tag from "src/presentation/components/common/tag/Tag";
import TagWithBullet from "src/presentation/components/common/tag/TagWithBullet";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import {
  ButtonsContainer,
  StyledGroupCard,
  StyledMainContainer,
  StyledTitleBox,
} from "./GroupsPage.styles";
import { useNavigate } from "react-router-dom";
import Avatar from "src/presentation/components/common/avatar/Avatar";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";

function GroupCard({ group }) {
  const { groupName, members, icon, accesses } = group;
  const GroupIcon = iconsMap[icon as keyof typeof iconsMap];
  const navigate = useNavigate();
  const theme = useTheme();

  function handleEditGroup() {
    navigate("edit-group", { state: { group: group } });
  }

  function handleUsersGroup() {
    navigate("");
  }

  return (
    <StyledGroupCard>
      <HeaderContainer>
        <StyledTitleBox>
          <IconWrapper sx={{ color: "neutral.main" }}>
            <GroupIcon size={24} />
          </IconWrapper>
          <Typography variant="h4" color="neutral.main">
            {groupName}
          </Typography>
        </StyledTitleBox>

        <ButtonsContainer>
          <Button
            variant="outlined"
            size="small"
            colorType="error"
            startIcon={<DeleteIcon size={20} />}
          >
            حذف
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="success"
            startIcon={<MessageEditIcon size={20} />}
            onClick={handleEditGroup}
          >
            ویرایش
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            startIcon={<TwoUsersIcon size={20} />}
          >
            کاربران
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            startIcon={<ComplaintIcon size={20} />}
          >
            دسترسی ها
          </Button>
        </ButtonsContainer>
      </HeaderContainer>

      <Divider sx={{ marginBlock: 2 }} />

      <StyledMainContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <Typography variant="body2" color="neutral.200">
            اعضای گروه
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {members.map((member) => (
              <Tag>
                <Avatar src={member.image} size={24}>
                  <UserIcon size={16} color={theme.palette.neutral.main} />
                </Avatar>
                {member.fullName}
              </Tag>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <Typography variant="body2" color="neutral.200">
            دسترسی ها :
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {accesses.map((access) => (
              <TagWithBullet>{access}</TagWithBullet>
            ))}
          </Box>
        </Box>
      </StyledMainContainer>
    </StyledGroupCard>
  );
}

export default GroupCard;
