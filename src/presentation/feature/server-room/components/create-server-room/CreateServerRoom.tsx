import { IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { TickIcon } from "src/presentation/assets/icons/TickIcon";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import { ButtonContainer } from "./CreateServerRoom.styles";
import CreateEditServerRoom from "../create-edit-server-room-form/CreateEditServerRoomForm";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

function CreateServerRoom() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <PageTitle title="افزودن اتاق سرور">
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

      <CreateEditServerRoom />
    </>
  );
}

export default CreateServerRoom;
