import { useNavigate } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Modal from "src/presentation/components/common/modal/Modal";
import Button from "src/presentation/components/common/buttons/Button";
import Avatar from "src/presentation/components/common/avatar/Avatar";
import Divider from "src/presentation/components/common/divider/Divider";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import TagWithBullet from "src/presentation/components/common/tag/TagWithBullet";
import OperationMenu from "../common/operation-menu/OperationMenu";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { TwoUsersIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import { ComplaintIcon } from "src/presentation/assets/icons/ComplaintIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { MessageEditIcon } from "src/presentation/assets/icons/MessageEditIcon";
import DeleteConfirmBackdrop from "src/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import {
  ButtonsContainer,
  StyledAccessesContainer,
  StyledGroupCard,
  StyledMainContainer,
  StyledMembersContainer,
  StyledTitleBox,
  TagsContainer,
} from "./GroupsPage.styles";
import { GroupType } from "./IGroupsList";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { useRef, useState } from "react";

function GroupCard({ group }: { group: GroupType }) {
  console.log(group);
  const { id, groupName, members, icon, accesses } = group;
  const GroupIcon = iconsMap[icon as keyof typeof iconsMap];
  const navigate = useNavigate();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function handleEditGroup() {
    navigate("edit-group", { state: { group: group } });
  }

  function handleUsersGroup() {
    navigate("");
  }

  function handleAccessesGroup() {
    navigate("");
  }

  function handleAccessToggle() {
    // setVisible((visible) => !visible);
    if (contentRef.current) {
      setContentHeight(!visible ? contentRef.current.scrollHeight : 0);
    }
    setVisible(!visible);
  }

  function deleteGroup(id: number) {
    console.log(`Group by id ${id} is deleted`);
  }

  return (
    <StyledGroupCard>
      <HeaderContainer>
        <StyledTitleBox>
          <IconWrapper>
            <GroupIcon size={24} color={theme.palette.neutral[100]} />
          </IconWrapper>
          <Typography variant="h4" color="neutral.main">
            {groupName}
          </Typography>
        </StyledTitleBox>

        <ButtonsContainer>
          {isDesktop ? (
            <>
              <Modal>
                <Modal.Open opens="delete-group">
                  <Button
                    variant="outlined"
                    size="small"
                    colorType="error"
                    startIcon={<DeleteIcon size={20} />}
                  >
                    حذف
                  </Button>
                </Modal.Open>

                <Modal.Window name="delete-group">
                  <DeleteConfirmBackdrop
                    title={groupName}
                    onConfirm={() => deleteGroup(id)}
                    // disabled={isDeleting}
                  />
                </Modal.Window>
              </Modal>
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
            </>
          ) : (
            <OperationMenu
              title={groupName}
              onDelete={() => deleteGroup(id)}
              onEdit={handleEditGroup}
              showUsers={handleUsersGroup}
              showAccesses={handleAccessesGroup}
            />
          )}
        </ButtonsContainer>
      </HeaderContainer>

      <Divider sx={{ marginBlock: 2 }} />

      <StyledMainContainer>
        {/* Group members */}
        <StyledMembersContainer>
          <Typography variant="body2" color="neutral.200">
            اعضای گروه
          </Typography>
          <TagsContainer>
            {members.map((member) => (
              <Tag>
                <Avatar src={member.image} size={24}>
                  <UserIcon size={16} color={theme.palette.neutral.main} />
                </Avatar>
                {member.fullName}
              </Tag>
            ))}
          </TagsContainer>
        </StyledMembersContainer>

        {/* Accesses */}
        {isMobile && (
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            onClick={handleAccessToggle}
            endIcon={
              visible ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />
            }
          >
            مشاهده دسترسی ها
          </Button>
        )}
        <StyledAccessesContainer
          sx={{ height: `${contentHeight}px` }}
          ref={contentRef}
        >
          <Typography variant="body2" color="neutral.200">
            دسترسی ها :
          </Typography>
          <TagsContainer>
            {accesses.map((access) => (
              <TagWithBullet>{access}</TagWithBullet>
            ))}
          </TagsContainer>
        </StyledAccessesContainer>
      </StyledMainContainer>
    </StyledGroupCard>
  );
}

export default GroupCard;
