import { useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

import IconButton from "@/presentation/components/common/icon-button/IconButton";
import Button from "@/presentation/components/common/buttons/Button";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import CreateEditServerRoom from "../create-edit-server-room-form/CreateEditServerRoomForm";
import { ButtonContainer } from "./EditServerRoom.styles";

function EditServerRoom() {
  const location = useLocation();
  const room = location.state?.room;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <PageTitle title="ویرایش اتاق سرور">
        <ButtonContainer>
          {isDesktop ? (
            <>
              <Button variant="outlined" size="small" colorType="primary">
                انصراف
              </Button>

              <Button variant="contained" size="small" colorType="primary">
                ذخیره تغییرات
              </Button>
            </>
          ) : (
            <>
              <IconButton iconName="close" variant="outlined" />
              <IconButton iconName="tick" />
            </>
          )}
        </ButtonContainer>
      </PageTitle>

      <CreateEditServerRoom roomToEdit={room} />
    </>
  );
}

export default EditServerRoom;
