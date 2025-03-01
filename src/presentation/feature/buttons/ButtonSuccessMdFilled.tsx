import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "./IButtons";

const ButtonSuccessMdFilled: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
}) => {
  const textColor = "neutral.50";
  const bgColor = "success.400";
  const borderColor = "";

  const textHoverColor = "neutral.50";
  const bgHoverColor = "success.600";
  const borderHoverColor = "";
  const disabledColor = "neutral.500";

  return (
    <ButtonCustom
      variant="contained"
      textColor={textColor}
      textHoverColor={textHoverColor}
      bgColor={!disabled ? bgColor : disabledColor}
      bgHoverColor={bgHoverColor}
      borderColor={borderColor}
      borderHoverColor={borderHoverColor}
      fontSize={16}
      size={40}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSize={20}
      padding="12px 24px"
      disabled={disabled}
      onClick={() => onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonSuccessMdFilled;
