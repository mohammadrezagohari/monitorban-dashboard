import ListCard from "src/presentation/components/common/list-card/ListCard";
import Button from "src/presentation/components/common/buttons/Button";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { StyledMembersMainContainer } from "./EditGroupPage.styles";
import EmptyData from "src/presentation/components/common/empty-data/EmptyData";

function GroupMembers({ members }) {

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اعضای گروه</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن عضو
        </Button>
      </HeaderContainer>
      <StyledMembersMainContainer>
        {members.length > 0 ? (
          members.map((member) => (
            <ListCard columns="2fr 1fr 3fr 1fr" item={member} key={member.id}>
              <ListCard.Title />

              <ListCard.FirstDetail label="نقش" />

              <ListCard.SecondDetail label="گروه" />

              <ListCard.Operations>
                <Button variant="outlined" size="small" colorType="error">
                  حذف
                </Button>
                <Button variant="outlined" size="small" colorType="primary">
                  مشاهده
                </Button>
              </ListCard.Operations>
            </ListCard>
          ))
        ) : (
          <EmptyData label="عضو" />
        )}
      </StyledMembersMainContainer>
    </SectionContainer>
  );
}

export default GroupMembers;
