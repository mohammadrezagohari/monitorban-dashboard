import { useState } from "react";
import { Typography, useTheme } from "@mui/material";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import VideoCard from "src/presentation/components/common/video-card/VideoCard";
import { tutorialsData } from "src/presentation/data/data";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

function TutorialPage() {
  const theme = useTheme();
  const [videos, setVideos] = useState(tutorialsData);
  // const [videos, setVideos] = useState([]);
  return (
    <>
      <PageTitle title="آموزش ها" />

      <SectionContainer>
        <MainContainer
          sx={
            videos.length > 0
              ? {
                  display: "grid",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  justifyItems: "center",
                  gap: 2,
                  [theme.breakpoints.up("sm")]: {
                    gridTemplateColumns: "repeat(2, 1fr)",
                  },
                  [theme.breakpoints.up("md")]: {
                    gridTemplateColumns: "repeat(3, 1fr)",
                  },
                  [theme.breakpoints.up("lg")]: {
                    gridTemplateColumns: "repeat(4, 1fr)",
                  },
                }
              : {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 100,
                }
          }
        >
          {!(videos.length > 0) && (
            <Typography variant="body1" color="neutral.main">
              ویدئویی برای نمایش وجود ندارد.
            </Typography>
          )}
          {videos.length > 0 &&
            videos.map((video) => <VideoCard video={video} key={video.id} />)}
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default TutorialPage;
