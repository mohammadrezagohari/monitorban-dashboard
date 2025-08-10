import { Typography, useTheme } from "@mui/material";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { StyledAnnounceItem } from "./Announcements.styles";

export default function AnnounceItem(props) {
  const theme = useTheme();

  const { item, isLastItem, announceStatus } = props;
  const ItemIcon = iconsMap[item.icon as keyof typeof iconsMap];

  const colors = {
    warning: theme.palette.error.main,
    normal: theme.palette.success.main,
    danger: theme.palette.warning.main,
  };

  return (
    <StyledAnnounceItem key={item.id} isLastItem={isLastItem}>
      {/* <div
        style={{
          backgroundColor: "#373040",
          borderRadius: "50%",
          padding: "12px",
          width: "48px",
          height: "48px",
        }}
      >
        {item.icon}
      </div> */}
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
