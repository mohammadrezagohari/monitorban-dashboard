import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Video } from "./VideoDetails.styles";
import { tutorialsData } from "src/presentation/data/data";

function VideoDetails() {
  const { id } = useParams<{ id: string }>();
  const video = tutorialsData.find((video) => video.id === Number(id));

  if (!video) return <Typography>ویدیو پیدا نشد</Typography>;

  return (
    <>
      <PageTitle title={video.title} />

      <Video controls>
        <source src={video.videoUrl} type="video/mp4" />
      </Video>
      <Typography variant="body1" color="neutral.200">
        {video.description}
      </Typography>
    </>
  );
}

export default VideoDetails;
