import {
  Box,
  Typography,
  useTheme,
  Checkbox as MuiCheckbox,
} from "@mui/material";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import BaseCheckbox from "src/presentation/feature/old/base-checkbox/BaseCheckbox";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { StyledAccessItem } from "../../../feature/users-management/components/roles/add-accesses/AddAccesses.styles";
import Checkbox from "../checkbox-input/Checkbox";

const AccessItem = ({
  item,
  checked,
  onChange,
}: {
  item: {
    title: string;
    city?: string;
    icon: string;
  };
  checked: boolean;
  onChange: () => void;
}) => {
  const { title, icon, city } = item;

  const ItemIcon = iconsMap[icon as keyof typeof iconsMap];

  const theme = useTheme();

  return (
    <StyledAccessItem onClick={onChange}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconWrapper>
          <ItemIcon color={theme.palette.primary[200]} />
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
        {/* <BaseCheckbox checked={checked} size={32} /> */}
        <Checkbox
          checked={checked}
          size={32}
          // onChange={(e) => {
          //   e.stopPropagation();
          //   onChange();
          // }}
        />
      </Box>
    </StyledAccessItem>
  );
};

export default AccessItem;
