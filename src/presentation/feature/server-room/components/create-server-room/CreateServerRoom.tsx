import { Box } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import CreateEditServerRoom from "../create-edit-server-room-form/CreateEditServerRoomForm";

function CreateServerRoom() {
  return (
    <>
      <PageTitle title="افزودن اتاق سرور">
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
            افزودن
          </Button>
        </Box>
      </PageTitle>

      <CreateEditServerRoom />
    </>
  );
}

export default CreateServerRoom;
