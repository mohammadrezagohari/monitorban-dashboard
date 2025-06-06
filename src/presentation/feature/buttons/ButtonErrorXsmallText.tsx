import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "../../components/common/button/IButtons";

const ButtonErrorXsmallText: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  type = "button",
  onClick,
}) => {
  const textColor = "error.400";
  const bgColor = "";
  const borderColor = "";

  const textHoverColor = "error.200";
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
      fontSize={14}
      size={34}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSize={16}
      padding="12px 24px"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonErrorXsmallText;
