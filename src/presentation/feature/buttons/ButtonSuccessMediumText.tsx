import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "../../components/common/button/IButtons";

const ButtonSuccessMediumText: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  type = "button",
  onClick,
}) => {
  const textColor = "success.400";
  const bgColor = "";
  const borderColor = "";

  const textHoverColor = "success.200";
  const bgHoverColor = "";
  const borderHoverColor = "";
  const disabledColor = "neutral.500";

  return (
    <ButtonCustom
      type={type}
      variant="text"
      textColor={!disabled ? textColor : disabledColor}
      textHoverColor={textHoverColor}
      bgColor={bgColor}
      bgHoverColor={bgHoverColor}
      borderColor={!disabled ? borderColor : disabledColor}
      borderHoverColor={borderHoverColor}
      fontSize={16}
      size={40}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSize={20}
      padding="12px 24px"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonSuccessMediumText;
