import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import GroupCard from "./GroupCard";
import { useState } from "react";
import { groupsList } from "src/presentation/data/data";
import { GroupListMainContainer } from "./GroupsPage.styles";

function GroupsList() {
  const [groups, setGroups] = useState(groupsList);

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>لیست گروه ها</SectionTitle>
      </HeaderContainer>
      <GroupListMainContainer>
        {groups.map((group) => (
          <GroupCard group={group} />
        ))}
      </GroupListMainContainer>
    </SectionContainer>
  );
}

export default GroupsList;
