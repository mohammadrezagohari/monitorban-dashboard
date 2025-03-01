import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "./IButtons";

const ButtonPrimaryXxsOutlined: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
}) => {
  const textColor = "primary.dark";
  const bgColor = "";
  const borderColor = "primary.dark";

  const textHoverColor = "primary.100";
  const bgHoverColor = "";
  const borderHoverColor = "primary.100";
  const disabledColor = "neutral.500";

  return (
    <ButtonCustom
      variant="outlined"
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

export default ButtonPrimaryXxsOutlined;
