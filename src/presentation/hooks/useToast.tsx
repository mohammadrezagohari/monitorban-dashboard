import toast from "react-hot-toast";
import { Icon } from "../components/common/icons/components/Icon";
import { useTheme } from "@mui/material";

export const useToast = () => {
  const theme = useTheme();
  const showToast = (
    type: "error" | "info" | "success" | "warning",
    message: string
  ) => {
    switch (type) {
      case "success":
        toast.success(message, {
          icon: (
            <Icon
              name="tickCircle"
              w={20}
              h={20}
              color={theme.palette.success.main}
            />
          ),
        });
        break;
      case "error":
        toast.error(message, {
          icon: (
            <Icon
              name="closeCircle"
              w={20}
              h={20}
              color={theme.palette.error.main}
            />
          ),
        });
        break;
      case "info":
        toast(message, {
          icon: (
            <Icon
              name="infoCircle"
              w={20}
              h={20}
              color={theme.palette.primary.main}
            />
          ),
        });
        break;
      case "warning":
        toast(message, {
          icon: (
            <Icon
              name="danger"
              w={20}
              h={20}
              // @ts-ignore
              color={theme.palette.warning[500]}
            />
          ),
        });
        break;
      default:
        toast(message);
    }
  };

  return { showToast };
};
