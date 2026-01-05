import { Box, Typography } from "@mui/material";

import TagWithBullet from "@/presentation/components/common/tag/TagWithBullet";
import { AccessesBox } from "../RolesPage.styles";

function RoleAccessibility({ accesses }) {
  return (
    <>
      <Typography variant="body2" color="neutral.200">
        دسترسی ها :
      </Typography>
      <AccessesBox>
        {accesses.map((temp, i) => (
          <TagWithBullet key={i}>{temp}</TagWithBullet>
        ))}
      </AccessesBox>
    </>
  );
}

export default RoleAccessibility;
