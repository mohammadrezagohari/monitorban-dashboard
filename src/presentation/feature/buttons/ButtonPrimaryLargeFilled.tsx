import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "../../components/common/button/IButtons";
import React from "react";

const ButtonPrimaryLargeFilled: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  type = "button",
  onClick,
}) => {
  const textColor = "neutral.50";
  const bgColor = "primary.500";
  const borderColor = "";

  const textHoverColor = "text.primary";
  const bgHoverColor = "primary.700";
  const borderHoverColor = "";
  const disabledColor = "neutral.500";

  return (
    <ButtonCustom
      type={type}
      variant="contained"
      textColor={!disabled ? textColor : textHoverColor}
      textHoverColor={textHoverColor}
      bgColor={!disabled ? bgColor : disabledColor}
      bgHoverColor={bgHoverColor}
      borderColor={borderColor}
      borderHoverColor={borderHoverColor}
      fontSize={16}
      size={48}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSize={24}
      padding="12px 24px"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonPrimaryLargeFilled;
