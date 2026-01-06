import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

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
import { IconName } from "@/presentation/components/common/icons";
import { AnimatePresence, motion } from "framer-motion";

type AnnounceType = {
  id: number;
  name: string;
  report: string;
  icon: IconName;
  status: "danger" | "normal" | "warning";
};

const announceItems: AnnounceType[] = [
  {
    id: 1,
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403",
    icon: "dropletPercent",
    status: "danger",
  },
  {
    id: 2,
    name: "اعتبار سیمکارت",
    report: "بیمارستان زارع  اعتبار سیم کارت کولر بان",
    icon: "simCard",
    status: "warning",
  },
  {
    id: 3,
    name: "سنسور وضعیت کولر",
    report: "کلینیک رازی  وضعیت کولر شماره 2",
    icon: "airConditioner",
    status: "normal",
  },
  {
    id: 4,
    name: "سنسور دمای کولر",
    report: "کلینیک رازی دمای کولر 24 درجه",
    icon: "temperatureSnow",
    status: "danger",
  },
  {
    id: 5,
    name: "اعتبار سیمکارت",
    report: "دانشکده علوم پزشکی  اعتبار سیم کارت کولر بان",
    icon: "simCard",
    status: "warning",
  },
  {
    id: 6,
    name: "سنسور وضعیت برق",
    report: "کلینیک رازی دمای کولر 24 درجه",
    icon: "lightSwitch",
    status: "warning",
  },
  {
    id: 7,
    name: "سنسور دمای رک",
    report: "بیمارستان زارع دمای رک بالا",
    icon: "server",
    status: "normal",
  },
  {
    id: 8,
    name: "اعتبار سیمکارت",
    report: "کلینیک رازی  اعتبار سیم کارت کولر بان",
    icon: "simCard",
    status: "normal",
  },
  {
    id: 9,
    name: "سنسور دمای کولر",
    report: "بیمارستان بوعلی دمای کولر 24 درجه",
    icon: "temperatureSnow",
    status: "warning",
  },
  {
    id: 10,
    name: "سنسور دمای رک",
    report: "بیمارستان زارع دمای رک بالا",
    icon: "server",
    status: "danger",
  },
  {
    id: 11,
    name: "سنسور دمای کولر",
    report: "دانشکده علوم پزشکی دمای کولر 24 درجه",
    icon: "temperatureSnow",
    status: "warning",
  },
  {
    id: 12,
    name: "سنسور دمای اتاق",
    report: "دانشکده علوم پزشکی  نشتی آب 3403",
    icon: "dropletPercent",
    status: "normal",
  },
  {
    id: 13,
    name: "اعتبار سیمکارت",
    report: "بیمارستان بوعلی  اعتبار سیم کارت کولر بان",
    icon: "simCard",
    status: "danger",
  },
  {
    id: 14,
    name: "سنسور دمای کولر",
    report: "بیمارستان بوعلی دمای کولر 24 درجه",
    icon: "temperatureSnow",
    status: "normal",
  },
  {
    id: 15,
    name: "سنسور وضعیت کولر",
    report: "دانشکده علوم پزشکی  وضعیت کولر شماره 2",
    icon: "airConditioner",
    status: "warning",
  },
  {
    id: 16,
    name: "سنسور دمای کولر",
    report: "بیمارستان زارع دمای کولر 24 درجه",
    icon: "temperatureSnow",
    status: "normal",
  },
  {
    id: 17,
    name: "سنسور وضعیت کولر",
    report: "بیمارستان بوعلی  وضعیت کولر شماره 2",
    icon: "airConditioner",
    status: "danger",
  },
  {
    id: 18,
    name: "سنسور رطوبت اتاق",
    report: "بیمارستان بوعلی  نشتی آب 3403",
    icon: "temperatureList",
    status: "normal",
  },
  {
    id: 19,
    name: "اعتبار سیمکارت",
    report: "دانشکده علوم پزشکی  اعتبار سیم کارت کولر بان",
    icon: "simCard",
    status: "danger",
  },
];

export default function Announcements() {
  const [announceStatus, setAnnounceStatus] =
    useState<AnnouncementStatus>("danger");
  const [announceList, setAnnounceList] = useState(announceItems);
  // const { isLoading, announcementItems } = useAnnouncement(announceStatus);

  useEffect(() => {
    const newAnnounce: AnnounceType = {
      id: 101,
      name: "سنسور وضعیت برق",
      report: "دانشگاه علوم پزشکی  افت ولتاژ برق",
      icon: "lightSwitch",
      status: "danger",
    };

    const timeout = setTimeout(() => {
      setAnnounceList((prevList) => [newAnnounce, ...prevList]);
    }, 5_000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const showList = announceList.filter(
    (item) => item.status === announceStatus
  );

  return (
    <SectionContainer width="100%" height={334} sx={{ maxWidth: { md: 350 } }}>
      <HeaderContainer>
        <SectionTitle>اعلانات</SectionTitle>

        {/* <Box width={85}> */}
        <FilterSelect
          options={annouceSelectOptions}
          value={announceStatus}
          setValue={
            (value: string) => setAnnounceStatus(value as AnnouncementStatus)
            // setValue={(value: string) =>
            // setAnnounceStatus(value as AnnouncementStatus)
          }
        />
        {/* </Box> */}
      </HeaderContainer>
      {/* {isLoading && <Spinner />} */}
      {/* {isLoading && (
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
      )} */}
      {showList && (
        <AnnouncementsList>
          <AnimatePresence></AnimatePresence>
          {showList.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <AnnounceItem item={item} announceStatus={announceStatus} />
              {index < showList.length - 1 && <Divider />}
            </motion.div>
          ))}
        </AnnouncementsList>
      )}
    </SectionContainer>
  );
}
