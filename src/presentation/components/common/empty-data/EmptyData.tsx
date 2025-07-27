import { Box, Typography } from "@mui/material";
import Button from "../buttons/Button";

function EmptyData({ label }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="body2" color="neutral.200">
        در حال حاضر هیچ {label === "عضو" ? `${label}ی` : label} اضافه نشده است !
      </Typography>

      <Button variant="outlined" size="small" colorType="secondary">
        افزودن {label}
      </Button>
    </Box>
  );
}

export default EmptyData;
