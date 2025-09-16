import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import CreateEditServerRoom from "../create-edit-server-room-form/CreateEditServerRoomForm";

function EditServerRoom() {
  const location = useLocation();
  const room = location.state?.room;

  console.log("room", room);

  return (
    <>
      <PageTitle title="ویرایش اتاق سرور">
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

      <CreateEditServerRoom roomToEdit={room} />
    </>
  );
}

export default EditServerRoom;
