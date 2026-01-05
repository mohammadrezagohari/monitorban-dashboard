import ListCard from "@/presentation/components/common/list-card/ListCard";
import Button from "@/presentation/components/common/buttons/Button";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { StyledMembersMainContainer } from "./EditGroupPage.styles";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import { MemberType } from "./IEditGroupPage";

function GroupMembers({ members }: { members: MemberType[] }) {
  function handleAddMember() {
    console.log("Add Member");
  }

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اعضای گروه</SectionTitle>
        <Button
          variant="outlined"
          size="small"
          colorType="primary"
          onClick={handleAddMember}
        >
          افزودن عضو
        </Button>
      </HeaderContainer>
      <StyledMembersMainContainer>
        {members.length > 0 ? (
          members.map((member) => (
            <ListCard
              columns="2fr 1fr 3fr 1fr"
              item={{
                avatar: member.image,
                title: member.fullName,
                caption: member.phone,
                firstDetailItems: member.roles,
                secondDetailItems: member.groups,
                ...member,
              }}
              key={member.id}
            >
              <ListCard.Title />

              <ListCard.ShowFirstDetails label="نقش" />

              <ListCard.ShowSecondDetails label="گروه" />

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
          <EmptyData label="عضو" handleClick={handleAddMember} />
        )}
      </StyledMembersMainContainer>
    </SectionContainer>
  );
}

export default GroupMembers;
