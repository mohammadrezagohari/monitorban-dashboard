import AccessItem from "./AccessItem";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { serverRoomItems } from "@/presentation/data/data";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import { ServerRoomSelectionMainContainer } from "../../../feature/users-management/components/roles/add-accesses/AddAccesses.styles";

function ServerRoomSelection({ accessServerRoom, handleServerRoomAccess }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اتاق سرور مورد نظرتان را انتخاب کنید</SectionTitle>
      </HeaderContainer>

      <ServerRoomSelectionMainContainer>
        {serverRoomItems.map((item) => (
          <AccessItem
            key={item.id}
            item={item}
            checked={accessServerRoom[item.title]}
            onChange={() => handleServerRoomAccess(item.title)}
          />
        ))}
      </ServerRoomSelectionMainContainer>
    </SectionContainer>
  );
}

export default ServerRoomSelection;
