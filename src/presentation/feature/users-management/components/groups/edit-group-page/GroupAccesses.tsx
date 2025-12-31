import { Icon } from "src/presentation/components/common/icons/components/Icon";
import Button from "src/presentation/components/common/buttons/Button";
import EmptyData from "src/presentation/components/common/empty-data/EmptyData";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Tag from "src/presentation/components/common/tag/Tag";
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
            {accesses.map((access) => (
              <Tag>
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
