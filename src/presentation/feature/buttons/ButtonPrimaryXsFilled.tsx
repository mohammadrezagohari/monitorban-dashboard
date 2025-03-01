import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "./IButtons";

const ButtonPrimaryXsFilled: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
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
      variant="contained"
      textColor={!disabled ? textColor : textHoverColor}
      textHoverColor={textHoverColor}
      bgColor={!disabled ? bgColor : disabledColor}
      bgHoverColor={bgHoverColor}
      borderColor={borderColor}
      borderHoverColor={borderHoverColor}
      fontSize={14}
      size={34}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSize={16}
      padding="12px 24px"
      disabled={disabled}
      onClick={() => onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonPrimaryXsFilled;
