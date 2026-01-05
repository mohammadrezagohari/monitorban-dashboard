import { Icon } from "@/presentation/components/common/icons/components/Icon";
import { useFormContext } from "react-hook-form";
import Button from "@/presentation/components/common/buttons/Button";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Tag from "@/presentation/components/common/tag/Tag";
import { StyledUserMainContainer } from "./UserPage.styles";

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
              <Icon
                name="close"
                w={20}
                h={20}
                onClick={() => handleRolesDelete(role)}
              />
              {role}
            </Tag>
          ))}
        </StyledUserMainContainer>
      ) : (
        <EmptyData label="نقش" handleClick={() => console.log("role")} />
      )}
    </SectionContainer>
  );
}

export default UserRoles;
