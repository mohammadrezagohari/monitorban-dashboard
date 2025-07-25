import { IconButton } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledUserMainContainer } from "./UserPage.styles";

function UserGroups({ userGroups, handleGroupsDelete }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>گروه ها</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن گروه
        </Button>
      </HeaderContainer>
      <StyledUserMainContainer>
        {userGroups.map((group: string, index: number) => (
          <Tag key={index}>
            <IconButton
              sx={{ p: 0, color: "inherit" }}
              onClick={() => handleGroupsDelete(group)}
            >
              <CloseIcon size={20} />
            </IconButton>
            {group}
          </Tag>
        ))}
      </StyledUserMainContainer>
    </SectionContainer>
  );
}

export default UserGroups;
