import { Box } from "@mui/material";
import React, { useState } from "react";

import useAnnouncement, { AnnouncementStatus } from "./useAnnouncement";

import Divider from "src/presentation/components/common/divider/Divider";
import AnnounceItem from "./AnnounceItem";
import FilterSelect from "src/presentation/components/common/old/select/FilterSelect";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { AnnouncementsList } from "./Announcements.styles";
import { annouceSelectOptions } from "src/presentation/data/data";

export default function Announcements() {
  const [announceStatus, setAnnounceStatus] =
    useState<AnnouncementStatus>("danger");
  const { isLoading, announcementItems, isError } =
    useAnnouncement(announceStatus);

  // console.log("debug:: ", announcementItems);

  return (
    <SectionContainer width="100%" height={334} sx={{ maxWidth: { md: 350 } }}>
      <HeaderContainer>
        <SectionTitle>اعلانات</SectionTitle>

        <Box width={85}>
          <FilterSelect
            options={annouceSelectOptions}
            value={announceStatus}
            setValue={(value: string) =>
              setAnnounceStatus(value as AnnouncementStatus)
            }
          />
        </Box>
      </HeaderContainer>
      {/* {isLoading && <Spinner />} */}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100%",
            color: "neutral.main",
          }}
        >
          در حال بارگیری ...
        </Box>
      )}
      {announcementItems && (
        <AnnouncementsList>
          {announcementItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <AnnounceItem item={item} announceStatus={announceStatus} />
              {index < announcementItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </AnnouncementsList>
      )}
    </SectionContainer>
  );
}
