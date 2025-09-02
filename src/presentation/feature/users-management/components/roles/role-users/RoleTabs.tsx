import { useState } from "react";

import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import Tabs from "src/presentation/components/common/tabs/Tabs";

// function TabPanel(props: )

function RoleTabs() {
  const [value, setValue] = useState(1);

  function handleChange(_, newValue) {
    setValue(newValue);
  }

  return (
    // <SectionContainer>
    //   <HeaderContainer></HeaderContainer>

      // <MainContainer>
        <Tabs />
      // </MainContainer>
    // </SectionContainer>
  );
}

export default RoleTabs;
