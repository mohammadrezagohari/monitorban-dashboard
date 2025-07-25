import { useState } from "react";
import { Box, List } from "@mui/material";

import AnnounceItem from "./AnnounceItem";
import FilterSelect from "src/presentation/components/common/old/select/FilterSelect";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import {
  annouceSelectOptions,
  announceItemsInit,
} from "src/presentation/data/data";

export default function Announcements() {
  const [announceItems] = useState(announceItemsInit);
  const [announceStatus, setAnnounceStatus] = useState("danger");

  return (
    <SectionContainer width="100%" height={334} sx={{ maxWidth: { md: 350 } }}>
      <HeaderContainer>
        <SectionTitle>اعلانات</SectionTitle>

        <Box width={85}>
          <FilterSelect
            options={annouceSelectOptions}
            value={announceStatus}
            setValue={setAnnounceStatus}
          />
        </Box>
      </HeaderContainer>
      <MainContainer height="100%">
        <Box
          sx={{
            overflow: "scroll",
            height: "calc(100% - 55px)",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <List component="ul" style={{}}>
            {announceItems.map((item, index) => (
              <AnnounceItem
                key={index}
                item={item}
                announceStatus={announceStatus}
                isLastItem={index === announceItems.length - 1}
              />
            ))}
          </List>
        </Box>
      </MainContainer>
    </SectionContainer>
  );
}
