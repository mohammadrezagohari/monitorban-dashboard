import { IconButton } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { StyledUserMainContainer } from "./UserPage.styles";
import EmptyData from "src/presentation/components/common/empty-data/EmptyData";
import { useFormContext } from "react-hook-form";

function UserGroups() {
  const { watch, setValue } = useFormContext();
  const userGroups: string[] = watch("groups") || [];
  const handleGroupsDelete = (group: string) => {
    // TODO:: implement delete group functionality
    console.log(group);
    const newGroups = userGroups.filter((g) => g !== group);
    setValue("groups", newGroups);
  };

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>گروه ها</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن گروه
        </Button>
      </HeaderContainer>
      {userGroups.length > 0 ? (
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
      ) : (
        <EmptyData label="گروه" />
      )}
    </SectionContainer>
  );
}

export default UserGroups;
