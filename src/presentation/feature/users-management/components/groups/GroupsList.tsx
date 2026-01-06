import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { groupsList } from "@/presentation/data/data";
import { useState } from "react";
import GroupCard from "./GroupCard";
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
          <GroupCard group={group} key={group.id} />
        ))}
      </GroupListMainContainer>
    </SectionContainer>
  );
}

export default GroupsList;
