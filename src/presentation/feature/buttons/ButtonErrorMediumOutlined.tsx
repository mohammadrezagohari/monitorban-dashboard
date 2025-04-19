import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "../../components/common/button/IButtons";

const ButtonErrorMediumOutlined: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  type = "button",
  onClick,
}) => {
  const textColor = "error.400";
  const bgColor = "";
  const borderColor = "error.400";

  const textHoverColor = "error.400";
  const bgHoverColor = "error.800";
  const borderHoverColor = "error.400";
  const disabledColor = "neutral.500";

  return (
    <ButtonCustom
      type={type}
      variant="outlined"
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

export default ButtonErrorMediumOutlined;
