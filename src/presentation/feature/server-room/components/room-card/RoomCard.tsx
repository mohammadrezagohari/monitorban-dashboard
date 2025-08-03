import { useNavigate } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import TagHeading from "src/presentation/components/common/tag-heading/TagHeading";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import {
  StyledDetail,
  StyledOperations,
  StyledRoomCard,
  StyledRoomTitle,
  StyledTitle,
} from "./RoomCard.styles";

function RoomCard({ room }) {
  const { id: roomId, title, icon, city, status, sensors } = room;
  const theme = useTheme();
  const RoomIcon = iconsMap[icon as keyof typeof iconsMap];
  const roomStatus =
    status === "normal" ? "نرمال" : status === "warning" ? "اخطار" : "بحرانی";
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/server-room/edit-server-room/${roomId}`, { state: { room } });
  }

  return (
    <StyledRoomCard>
      <StyledTitle>
        <IconWrapper>
          <RoomIcon size={24} color={theme.palette.primary[200]} />
        </IconWrapper>

        <Box>
          <StyledRoomTitle variant="h5">{title}</StyledRoomTitle>
          <Typography variant="body2" color="neutral.200">
            {city}
          </Typography>
        </Box>
      </StyledTitle>

      <StyledDetail>
        <TagHeading>وضعیت کلی :</TagHeading>
        <Tag type={status}>{roomStatus}</Tag>
      </StyledDetail>

      <StyledDetail>
        <TagHeading>سنسورها :</TagHeading>
        <Box>
          {sensors?.slice(0, 3).map((sensor: string, index: number) => (
            <Tag key={index}>{sensor.name}</Tag>
          ))}
        </Box>
      </StyledDetail>

      <StyledOperations>
        <Button variant="outlined" size="small" colorType="error">
          حذف
        </Button>
        <Button
          variant="outlined"
          size="small"
          colorType="primary"
          onClick={handleEdit}
        >
          ویرایش
        </Button>
      </StyledOperations>
    </StyledRoomCard>
  );
}

export default RoomCard;
