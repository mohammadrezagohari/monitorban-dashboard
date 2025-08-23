import AccessItem from "./AccessItem";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { serverRoomItems } from "src/presentation/data/data";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { ServerRoomSelectionMainContainer } from "../../../feature/users-management/components/roles/add-accesses/AddAccesses.styles";
import { Controller, useFormContext } from "react-hook-form";
import { FormValues } from "./IStepper";

function ServerRoomSelection() {
  //{ accessServerRoom, handleServerRoomAccess }

  const { control } = useFormContext<FormValues>();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اتاق سرور مورد نظرتان را انتخاب کنید</SectionTitle>
      </HeaderContainer>

      <ServerRoomSelectionMainContainer>
        {serverRoomItems.map((room) => (
          <Controller
            key={room.id}
            name={`serverRooms.${room.id}`}
            control={control}
            render={({ field }) => (
              <AccessItem
                key={room.id}
                item={room}
                checked={field.value}
                onChange={() => field.onChange(!field.value)}
              />
            )}
          />
        ))}
      </ServerRoomSelectionMainContainer>
    </SectionContainer>
  );
}

export default ServerRoomSelection;
