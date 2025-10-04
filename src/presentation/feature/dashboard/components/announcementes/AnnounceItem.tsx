import { Typography, useTheme } from "@mui/material";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { AnnounceItemProps } from "./IAnnouncements";
import { StyledAnnounceItem } from "./Announcements.styles";

export default function AnnounceItem(props: AnnounceItemProps) {
  const theme = useTheme();

  const { item, announceStatus } = props;
  const ItemIcon = iconsMap[item.icon as keyof typeof iconsMap];

  const colors = {
    warning: theme.palette.warning.main,
    normal: theme.palette.success.main,
    danger: theme.palette.error.main,
  };


  return (
    <StyledAnnounceItem
      key={item.id}
      // isLastItem={isLastItem}
    >
      <IconWrapper bgcolor={theme.palette.neutral[600]}>
        <ItemIcon color={colors[announceStatus]} />
      </IconWrapper>
      <div>
        <Typography variant="body1" sx={{ color: theme.palette.neutral[100] }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.neutral[200] }}>
          {item.report}
        </Typography>
      </div>
    </StyledAnnounceItem>
  );
}
