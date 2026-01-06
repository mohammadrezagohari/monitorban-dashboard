import { Icon } from "@/presentation/components/common/icons/components/Icon";
import Button from "@/presentation/components/common/buttons/Button";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Tag from "@/presentation/components/common/tag/Tag";
import { StyledAccessesMainContainer } from "./EditGroupPage.styles";
import { AccessesType } from "./IEditGroupPage";

function GroupAccesses({ accesses }: AccessesType) {
  function handleAddAccess() {
    console.log("Added");
  }
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی های گروه</SectionTitle>
        <Button
          variant="outlined"
          size="small"
          colorType="primary"
          onClick={handleAddAccess}
        >
          افزودن دسترسی
        </Button>
      </HeaderContainer>
      <MainContainer>
        {accesses.length > 0 ? (
          <StyledAccessesMainContainer>
            {accesses.map((access, index) => (
              <Tag key={index}>
                <Icon name="close" w={20} h={20} />
                {access}
              </Tag>
            ))}
          </StyledAccessesMainContainer>
        ) : (
          <EmptyData label="دسترسی" handleClick={handleAddAccess} />
        )}
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupAccesses;
