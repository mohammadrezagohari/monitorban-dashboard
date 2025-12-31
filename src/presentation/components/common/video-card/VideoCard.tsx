import { CardMedia, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { VideoCardButton } from "../buttons/VideoCardButton";
import { Icon } from "../icons/components/Icon";
import { VideoCardProps } from "./IVideoCard";
import {
  Card,
  CardActions,
  CardContent,
  StyledTitle,
  StyledVideoType,
} from "./VideoCard.styles";

function VideoCard({ video }: VideoCardProps) {
  const { id, title, thumbnail } = video;
  const navigate = useNavigate();

  const theme = useTheme();

  const handleClick = () => {
    navigate(`/tutorials/videos/${id}`);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="auto"
        image={thumbnail}
        alt={title}
        sx={{ borderRadius: "10px" }}
      />
      <CardContent sx={{ padding: 0 }}>
        <StyledTitle>{title}</StyledTitle>
      </CardContent>
      <CardActions>
        <StyledVideoType>
          <Icon name="video" color={theme.palette.neutral[100]} w={20} h={20} />
          ویدیو
        </StyledVideoType>
        <VideoCardButton
          // endIcon={<LeftArrowIcon size={20} />}

          onClick={handleClick}
        >
          مشاهده
        </VideoCardButton>
      </CardActions>
    </Card>
  );
}

export default VideoCard;
