import { Box, Typography, useTheme } from "@mui/material";

import { StyledAccessItem } from "../../../feature/users-management/components/roles/add-accesses/AddAccesses.styles";
import Checkbox from "../checkbox/Checkbox";
import { IconName } from "../icons";
import { IconWrapper } from "../icons/IconWrapper.style";
import { Icon } from "../icons/components/Icon";

const AccessItem = ({
  item,
  checked,
  onChange,
}: {
  item: {
    title: string;
    city?: string;
    icon: IconName;
  };
  checked: boolean;
  onChange: () => void;
}) => {
  const { title, icon, city } = item;

  const theme = useTheme();

  return (
    <StyledAccessItem onClick={onChange}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconWrapper>
          {/* @ts-ignore */}
          <Icon name={icon} color={theme.palette.primary[200]} />
        </IconWrapper>
        <Box>
          <Typography variant="body1" color="neutral.100">
            {title}
          </Typography>
          {city && (
            <Typography variant="body2" color="neutral.200">
              {city}
            </Typography>
          )}
        </Box>
      </Box>

      <Box>
        <Checkbox checked={checked} iconSize={32} />
      </Box>
    </StyledAccessItem>
  );
};

export default AccessItem;
