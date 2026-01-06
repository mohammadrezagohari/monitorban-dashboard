import Button from "@/presentation/components/common/buttons/Button";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import CreateEditServerRoom from "../create-edit-server-room-form/CreateEditServerRoomForm";
import { ButtonContainer } from "./CreateServerRoom.styles";

function CreateServerRoom() {
  const { isMediumScreen } = useScreenSize();

  return (
    <>
      <PageTitle title="افزودن اتاق سرور">
        <ButtonContainer>
          {isMediumScreen ? (
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

      <CreateEditServerRoom />
    </>
  );
}

export default CreateServerRoom;
