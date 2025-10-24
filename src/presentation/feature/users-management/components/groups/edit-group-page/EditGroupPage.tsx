import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import GroupInfo from "./GroupInfo";
import GroupMembers from "./GroupMembers";
import GroupAccesses from "./GroupAccesses";
import { useLocation } from "react-router-dom";
import {
  ButtonContainer,
  StyledEditGroupPageContainer,
} from "./EditGroupPage.styles";

function EditGroupPage() {
  const location = useLocation();
  const group = location.state.group;

  return (
    <>
      <PageTitle title="ویرایش گروه">
        <ButtonContainer>
          <Button variant="outlined" size="small" colorType="primary">
            انصراف
          </Button>
          <Button variant="contained" size="small" colorType="primary">
            ذخیره تغییرات
          </Button>
        </ButtonContainer>
      </PageTitle>

      <StyledEditGroupPageContainer>
        <GroupInfo group={group} />

        <GroupMembers members={group.members} />

        <GroupAccesses accesses={group.accesses} />
      </StyledEditGroupPageContainer>
    </>
  );
}

export default EditGroupPage;
