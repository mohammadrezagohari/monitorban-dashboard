import { Typography, useTheme } from "@mui/material";

import useTutorials from "./useTutorials";

import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import VideoCard from "@/presentation/components/common/video-card/VideoCard";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import { EmptyList, TutorialList } from "./TutorialPage.styles";

function TutorialPage() {
  const theme = useTheme();
  const { videos, isLoading } = useTutorials();

  if (isLoading)
    return <p style={{ fontSize: 48, color: "#EEE" }}>Loading...</p>;

  return (
    <>
      <PageTitle title="آموزش ها" />

      <SectionContainer>
        <MainContainer>
          {!videos.length && (
            <EmptyList>
              <Typography variant="body1" color="neutral.main">
                ویدئویی برای نمایش وجود ندارد.
              </Typography>
            </EmptyList>
          )}
          {videos.length > 0 && (
            <TutorialList>
              {videos.map((video) => (
                <VideoCard video={video} key={video.id} />
              ))}
            </TutorialList>
          )}
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default TutorialPage;
