import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { VideoCardProps } from "./IVideoCard";
import { Card } from "./VideoCard.styles";
import { LeftArrowIcon } from "src/presentation/assets/icons/LeftArrowIcon";
import { VideoIcon } from "src/presentation/assets/icons/VideoIcon";
import { VideoCardButton } from "../buttons/VideoCardButton";
import { Link } from "react-router-dom";

function VideoCard({ video }: VideoCardProps) {
  const { id, title, thumbnail } = video;

  const theme = useTheme();

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
        <Typography
          sx={{ height: { xs: 50, md: 75 }, fontSize: 16, fontWeight: 600 }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "&.MuiCardActions-root>:not(style)": {
            margin: 0,
          },
          "&.MuiCardActions-root": {
            padding: 0,
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: theme.palette.neutral[200],
          }}
        >
          <VideoIcon color={theme.palette.neutral[100]} size={20} />
          ویدیو
        </Typography>
        <VideoCardButton
          component={Link}
          to={`/tutorials/videos/${id}`}
          endIcon={<LeftArrowIcon size={20} />}
        >
          مشاهده
        </VideoCardButton>
      </CardActions>
    </Card>
  );
}

export default VideoCard;
