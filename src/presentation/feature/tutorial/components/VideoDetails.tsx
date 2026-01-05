import { Typography } from "@mui/material";

import useVideo from "./useVideo";

import { Video } from "./VideoDetails.styles";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import { useParams } from "react-router-dom";

function VideoDetails() {
  const { id } = useParams<{ id: string }>();

  const { video, isLoading } = useVideo(id);

  if (isLoading)
    return <Typography color="neutral.main">در حال بارگذاری...</Typography>;

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
