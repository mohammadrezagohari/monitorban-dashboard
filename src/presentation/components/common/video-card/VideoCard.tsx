import { CardMedia, useTheme } from "@mui/material";
import { VideoCardProps } from "./IVideoCard";
import {
  Card,
  CardActions,
  CardContent,
  
  StyledTitle,
  StyledVideoType,
} from "./VideoCard.styles";
import { LeftArrowIcon } from "src/presentation/assets/icons/LeftArrowIcon";
import { VideoIcon } from "src/presentation/assets/icons/VideoIcon";
import { VideoCardButton } from "../buttons/VideoCardButton";
import { useNavigate } from "react-router-dom";

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
          <VideoIcon color={theme.palette.neutral[100]} size={20} />
          ویدیو
        </StyledVideoType>
        <VideoCardButton
          endIcon={<LeftArrowIcon size={20} />}
          onClick={handleClick}
        >
          مشاهده
        </VideoCardButton>
      </CardActions>
    </Card>
  );
}

export default VideoCard;
