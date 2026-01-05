import { Box } from "@mui/material";
import React, { useState } from "react";

import useAnnouncement, {
  AnnouncementStatus,
} from "@/presentation/services/query/dashboard/useAnnouncement";

import Divider from "@/presentation/components/common/divider/Divider";
import AnnounceItem from "./AnnounceItem";
import FilterSelect from "@/presentation/components/common/select/RealtimeFilterSelect";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import { AnnouncementsList } from "./Announcements.styles";
import { annouceSelectOptions } from "@/presentation/data/data";

export default function Announcements() {
  const [announceStatus, setAnnounceStatus] =
    useState<AnnouncementStatus>("danger");
  const { isLoading, announcementItems } = useAnnouncement(announceStatus);

  return (
    <SectionContainer width="100%" height={334} sx={{ maxWidth: { md: 350 } }}>
      <HeaderContainer>
        <SectionTitle>اعلانات</SectionTitle>

        {/* <Box width={85}> */}
        <FilterSelect
          options={annouceSelectOptions}
          value={announceStatus}
          setValue={(value: string) =>
            setAnnounceStatus(value as AnnouncementStatus)
          }
        />
        {/* </Box> */}
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
