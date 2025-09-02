import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import GroupCard from "./GroupCard";
import { useState } from "react";
import { groupsList } from "src/presentation/data/data";

function GroupsList() {
  const [groups, setGroups] = useState(groupsList);
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>لیست گروه ها</SectionTitle>
      </HeaderContainer>
      <MainContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {groups.map((group) => (
          <GroupCard group={group} />
        ))}
        {/* <GroupCard /> */}
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupsList;
