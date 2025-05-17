import { Typography } from "@mui/material";

export default function PageTitle({ children }: { children: string }) {
  return (
    <Typography
      variant="h2"
      color="neutral.main"
      sx={{
        fontSize: { xs: 24, md: 32 },
      }}
    >
      {children}
    </Typography>
  );
}
