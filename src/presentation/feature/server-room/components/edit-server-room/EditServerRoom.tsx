import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import CreateEditServerRoom from "../create-edit-server-room-form/CreateEditServerRoomForm";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import { TickIcon } from "src/presentation/assets/icons/TickIcon";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
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
              <IconButtonWithBorder>
                <CloseIcon size={16} />
              </IconButtonWithBorder>
              <IconButton
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "10px",
                }}
              >
                <TickIcon size={16} />
              </IconButton>
            </>
          )}
        </ButtonContainer>
      </PageTitle>

      <CreateEditServerRoom roomToEdit={room} />
    </>
  );
}

export default EditServerRoom;
