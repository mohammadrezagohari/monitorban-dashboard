import { IconButton } from "@mui/material";

import { useFormContext } from "react-hook-form";
import Button from "@/presentation/components/common/buttons/Button";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Tag from "@/presentation/components/common/tag/Tag";
import { StyledUserMainContainer } from "./UserPage.styles";

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
                <Icon name="close" w={20} h={20} />
              </IconButton>
              {group}
            </Tag>
          ))}
        </StyledUserMainContainer>
      ) : (
        <EmptyData label="گروه" handleClick={() => console.log("group")} />
      )}
    </SectionContainer>
  );
}

export default UserGroups;
