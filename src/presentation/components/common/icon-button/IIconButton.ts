import { ButtonProps as MuiButtonProps } from "@mui/material";
import { IconName } from "../icons";

export type VariantT = "contained" | "outlined";
export type ColorT = "primary" | "secondary" | "success" | "error";

export interface IconButtonProps extends Omit<MuiButtonProps, "size" | "variant" | "colorType"> {
    iconName: IconName;
    variant?: VariantT;
    colorType?: ColorT;
}