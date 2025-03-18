import { Checkbox, styled } from "@mui/material";
import { BaseCheckboxProps } from "./IBaseCheckbox";

export const StyledCheckbox = styled(Checkbox, {
    shouldForwardProp: (prop) =>
        prop !== "checkedColor" && prop !== "uncheckedColor",
})<BaseCheckboxProps>(
    ({ checkedColor = "#8C32D9", uncheckedColor = "#F7F5FA", disabled }) => ({
        color: uncheckedColor,
        padding: 0,
        "&.Mui-checked": {
            color: checkedColor,
        },
        transition: "color 0.3s ease",
        "&.Mui-disabled": {
            color: "#5B5266",
            borderColor: "red",
            pointerEvents: "none",
        },
    })
);