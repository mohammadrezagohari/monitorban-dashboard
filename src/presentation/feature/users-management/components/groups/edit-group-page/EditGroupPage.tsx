import { Box } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { StyledEditGroupPageContainer } from "./EditGroupPage.styles";
import GroupInfo from "./GroupInfo";
import GroupMembers from "./GroupMembers";
import GroupAccesses from "./GroupAccesses";
import { useLocation } from "react-router-dom";

function EditGroupPage() {
  const location = useLocation();
  const group = location.state.group;

  return (
    <>
      <PageTitle title="ویرایش گروه">
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="outlined" size="small" colorType="primary">
            انصراف
          </Button>
          <Button variant="contained" size="small" colorType="primary">
            ذخیره تغییرات
          </Button>
        </Box>
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
