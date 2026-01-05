import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Icon } from "@/presentation/components/common/icons/components/Icon";
import Button from "@/presentation/components/common/buttons/Button";
import TagHeading from "@/presentation/components/common/tag-heading/TagHeading";
import Tag from "@/presentation/components/common/tag/Tag";
import {
  StyledDetail,
  StyledOperations,
  StyledRoomCard,
  StyledRoomTitle,
  StyledTitle,
} from "./RoomCard.styles";
import { IconWrapper } from "@/presentation/components/common/icons/IconWrapper.style";

function RoomCard({ room }) {
  const { id: roomId, title, icon, city, status, sensors } = room;
  const theme = useTheme();
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
          {/* <RoomIcon size={24} color={theme.palette.primary[200]} /> */}
          {/* @ts-ignore */}
          <Icon name={icon} color={theme.palette.primary[200]} />
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
