import { Box, Typography } from "@mui/material";

import TagWithBullet from "src/presentation/components/common/tag/TagWithBullet";
import { AccessesBox } from "../roles/RolesPage.styles";

function RoleAccessibility({ accesses }) {
  return (
    <Box sx={{ gridColumn: "1 / -1" }}>
      <Typography variant="body2" color="neutral.200">
        دسترسی ها :
      </Typography>
      <AccessesBox>
        {accesses.map((temp, i) => (
          <TagWithBullet key={i}>{temp}</TagWithBullet>
        ))}
      </AccessesBox>
    </Box>
  );
}

export default RoleAccessibility;
