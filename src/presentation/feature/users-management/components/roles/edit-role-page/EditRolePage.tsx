import { useState } from "react";
import { Box } from "@mui/material";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import Button from "src/presentation/components/common/buttons/Button";
import { accessesTemplate, filterOptions } from "src/presentation/data/data";
import RoleInfo from "./RoleInfo";
import Accesses from "./Accesses";
import { StyledEditRolePageContainer } from "./EditRolePage.styles";
import { useLocation } from "react-router-dom";

export default function EditRolePage() {
  const [select, setSelect] = useState("");
  const [accesses, setAccesses] = useState(accessesTemplate);
  const location = useLocation();
  const role = location.state?.role;

  const handleGroupsDelete = (selectedItem: string) => {
    console.log(selectedItem);
    setAccesses((prevItems: string[]) =>
      prevItems.filter((item: string) => item !== selectedItem)
    );
  };

  console.log(role);

  return (
    <>
      <PageTitle title="ویرایش نقش">
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
        <RoleInfo role={role} />

        <Accesses accesses={accesses} onClick={handleGroupsDelete} />
      </StyledEditRolePageContainer>
    </>
  );
}
