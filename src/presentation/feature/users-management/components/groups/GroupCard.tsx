import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Icon } from "@/presentation/components/common/icons/components/Icon";
import { IconWrapper } from "@/presentation/components/common/icons/IconWrapper.style";
import { useEffect, useRef, useState } from "react";
import Avatar from "@/presentation/components/common/avatar/Avatar";
import DeleteConfirmBackdrop from "@/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import Button from "@/presentation/components/common/buttons/Button";
import Divider from "@/presentation/components/common/divider/Divider";
import Modal from "@/presentation/components/common/modal/Modal";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import Tag from "@/presentation/components/common/tag/Tag";
import TagWithBullet from "@/presentation/components/common/tag/TagWithBullet";
import OperationMenu from "../common/operation-menu/OperationMenu";
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

function GroupCard({ group }: { group: GroupType }) {
  console.log(group);
  const { id, groupName, members, icon, accesses } = group;
  const navigate = useNavigate();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [contentHeight, setContentHeight] = useState("");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if(isDesktop) {
      setContentHeight("auto");
    }
  }, [isDesktop])

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
            {/* <GroupIcon size={24} color={theme.palette.neutral[100]} /> */}
            <Icon name={icon} color={theme.palette.neutral[100]} />
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
                    rightIcon="delete"
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
                rightIcon="messageEdit"
                onClick={handleEditGroup}
              >
                ویرایش
              </Button>
              <Button
                variant="outlined"
                size="small"
                colorType="primary"
                rightIcon="twoUsers"
              >
                کاربران
              </Button>
              <Button
                variant="outlined"
                size="small"
                colorType="primary"
                rightIcon="complaint"
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
                  <Icon
                    name="user"
                    w={16}
                    h={16}
                    color={theme.palette.neutral.main}
                  />
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
            leftIcon={visible ? "arrowUp" : "arrowDown"}
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
