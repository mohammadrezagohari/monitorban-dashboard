import { Button, SxProps, Theme } from "@mui/material";
import { Icon } from "../icons/components/Icon";
import { IconButtonProps } from "./IIconButton";
import { colors } from "./IconButton.styles";

const IconButton = ({
  iconName,
  variant = "contained",
  colorType = "primary",
  ...props
}: IconButtonProps) => {
  const baseStyle: SxProps<Theme> = {
    display: "grid",
    placeContent: "center",
    width: "2rem",
    height: "2rem",
    color: colors[variant][colorType].text,
    backgroundColor:
      variant === "contained" ? colors[variant][colorType].bg : "transparent",
    border: "1px solid",
    borderColor: colors[variant][colorType].border,
    borderRadius: "10px",
    padding: "0.5rem",
    // borderColor: colors[variant][colorType].border,
    minWidth: "unset",

    "&:hover": {
      backgroundColor: colors[variant][colorType].hover.bg,
      color: colors[variant][colorType].hover.text,
      borderColor: colors[variant][colorType].hover.border,
    },

    "&:disabled": {
      backgroundColor: colors[variant].disabled.bg,
      color: colors[variant].disabled.text,
      borderColor: colors[variant].disabled.border,
    },
  };
  return (
    <Button variant={variant} sx={baseStyle} {...props}>
      <Icon name={iconName} w={16} h={16} />
    </Button>
  );
};

export default IconButton;
