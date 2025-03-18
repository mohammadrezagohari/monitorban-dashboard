import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "../../components/common/button/IButtons";

const ButtonErrorXxsmallText: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
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
      variant="text"
      textColor={!disabled ? textColor : disabledColor}
      textHoverColor={textHoverColor}
      bgColor={bgColor}
      bgHoverColor={bgHoverColor}
      borderColor={!disabled ? borderColor : disabledColor}
      borderHoverColor={borderHoverColor}
      fontSize={12}
      size={32}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSize={16}
      padding="8px 12px"
      disabled={disabled}
      onClick={() => onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonErrorXxsmallText;
