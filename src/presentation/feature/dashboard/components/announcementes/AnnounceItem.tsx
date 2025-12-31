import { Typography, useTheme } from "@mui/material";

import { Icon } from "src/presentation/components/common/icons/components/Icon";
import { StyledAnnounceItem } from "./Announcements.styles";
import { AnnounceItemProps } from "./IAnnouncements";
import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";

export default function AnnounceItem({
  item,
  announceStatus,
}: AnnounceItemProps) {
  const theme = useTheme();

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
        <Icon name={item.icon} color={colors[announceStatus]} />
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
