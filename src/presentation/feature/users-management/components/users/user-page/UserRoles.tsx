import { IconButton } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledUserMainContainer } from "./UserPage.styles";
import EmptyData from "src/presentation/components/common/empty-data/EmptyData";
import { useFormContext } from "react-hook-form";

function UserRoles() {
  const { watch, setValue } = useFormContext();
  const userRoles: string[] = watch("roles") || [];

  const handleRolesDelete = (role: string) => {
    console.log(role);
    const newRoles = userRoles.filter((r) => r !== role);
    setValue("roles", newRoles);
  };

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>نقش های کاربر</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن نقش
        </Button>
      </HeaderContainer>

      {userRoles.length > 0 ? (
        <StyledUserMainContainer>
          {userRoles.map((role: string, index: number) => (
            <Tag key={index}>
              <IconButton
                sx={{ p: 0, color: "inherit" }}
                onClick={() => handleRolesDelete(role)}
              >
                <CloseIcon size={20} />
              </IconButton>
              {role}
            </Tag>
          ))}
        </StyledUserMainContainer>
      ) : (
        <EmptyData label="نقش" />
      )}
    </SectionContainer>
  );
}

export default UserRoles;
