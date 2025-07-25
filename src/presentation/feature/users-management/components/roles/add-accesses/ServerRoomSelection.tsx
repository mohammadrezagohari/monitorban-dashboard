import AccessItem from "./AccessItem";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { serverRoomItems } from "src/presentation/data/data";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { ServerRoomSelectionMainContainer } from "./AddAccesses.styles";

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
