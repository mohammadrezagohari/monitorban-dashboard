import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import VideoCard from "src/presentation/components/common/video-card/VideoCard";
import { useTheme } from "@mui/material";

function TutorialPage() {
  const theme = useTheme();
  return (
    <>
      <PageTitle title="آموزش ها" />

      <SectionContainer
        sx={{
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
        }}
      >
        <VideoCard
          id="1"
          title="آموزش قسمت های مختلف داشبورد مدیریت 1"
          thumbnail="/assets/images/thumbnails/thumbnail.jpg"
        />
        <VideoCard
          id="2"
          title="آموزش قسمت های مختلف داشبورد مدیریت 2"
          thumbnail="/assets/images/thumbnails/thumbnail.jpg"
        />
        <VideoCard
          id="3"
          title="آموزش قسمت های مختلف داشبورد مدیریت 3"
          thumbnail="/assets/images/thumbnails/thumbnail.jpg"
        />
        <VideoCard
          id="4"
          title="آموزش قسمت های مختلف داشبورد مدیریت 4"
          thumbnail="/assets/images/thumbnails/thumbnail.jpg"
        />
        <VideoCard
          id="5"
          title="آموزش قسمت های مختلف داشبورد مدیریت 5"
          thumbnail="/assets/images/thumbnails/thumbnail.jpg"
        />
        <VideoCard
          id="6"
          title="آموزش قسمت های مختلف داشبورد مدیریت 6"
          thumbnail="/assets/images/thumbnails/thumbnail.jpg"
        />
      </SectionContainer>
    </>
  );
}

export default TutorialPage;
