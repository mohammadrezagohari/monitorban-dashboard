import { Backdrop, Box, Typography } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";

function DeleteConfirmBackdrop({
  open,
  onClose,
  onConfirm,
  roleTitle,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  roleTitle: string | null;
}) {
  return (
    <Backdrop
      sx={(theme) => ({
        color: "neutral.200",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
      onClick={onClose}
    >
      <Box
        sx={{
          p: 2,
          border: "1px solid #9B92A6",
          borderRadius: "25px",
          bgcolor: "#1C1926",
          minWidth: 350,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Typography variant="h3" sx={{ color: "warning.500", mb: 2 }}>
          هشدار!
        </Typography>
        <Typography variant="body1" sx={{ color: "neutral.200", mb: 3 }}>
          آیا از حذف نقش{" "}
          <Box component="span" sx={{ color: "primary.300" }}>
            "{roleTitle}"
          </Box>{" "}
          مطمئن هستید ؟
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            size="xsmall"
            colorType="primary"
            onClick={onClose}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            size="xsmall"
            colorType="primary"
            onClick={onConfirm}
          >
            تایید
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
}

export default DeleteConfirmBackdrop;
