import { useState } from "react";
import { Box } from "@mui/material";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import Button from "src/presentation/components/common/buttons/Button";
import { accessesTemplate, filterOptions } from "src/presentation/data/data";
import RoleInfo from "./RoleInfo";
import Accesses from "./Accesses";
import { StyledEditRolePageContainer } from "./EditRolePage.styles";

export default function EditRolePage() {
  const [select, setSelect] = useState("");
  const [accesses, setAccesses] = useState(accessesTemplate);

  const handleGroupsDelete = (selectedItem: string) => {
    console.log(selectedItem);
    setAccesses((prevItems: string[]) =>
      prevItems.filter((item: string) => item !== selectedItem)
    );
  };
  return (
    <>
      <PageTitle title="نقش ها">
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="outlined" size="small" colorType="primary">
            انصراف
          </Button>
          <Button variant="contained" size="small" colorType="primary">
            ذخیره تغییرات
          </Button>
        </Box>
      </PageTitle>

      <StyledEditRolePageContainer>
        <RoleInfo />

        <Accesses accesses={accesses} onClick={handleGroupsDelete} />
      </StyledEditRolePageContainer>
    </>
  );
}
