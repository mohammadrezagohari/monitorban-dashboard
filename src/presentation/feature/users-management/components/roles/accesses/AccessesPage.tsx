import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "@/presentation/components/common/buttons/Button";
import Accesses from "../edit-role-page/Accesses";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import { usersInfo } from "@/presentation/data/data";

function AccessesPage() {
  const navigate = useNavigate();

  function handdleAddAccess() {
    navigate("add-new-access");
  }

  return (
    <>
      <PageTitle title="دسترسی ها">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button variant="outlined" size="small" colorType="primary">
            انصراف
          </Button>
          <Button variant="contained" size="small" colorType="primary">
            ذخیره تغییرات
          </Button>
        </Box>
      </PageTitle>

      <Accesses
        accesses={usersInfo[0].accesses}
        onClick={() => console.log("clicked")}
      />
    </>
  );
}

export default AccessesPage;
