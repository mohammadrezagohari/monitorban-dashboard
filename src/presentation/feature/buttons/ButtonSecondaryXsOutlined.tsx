import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "./IButtons";

const ButtonSecondaryXsOutlined: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
}) => {
  const textColor = "secondary.200";
  const bgColor = "";
  const borderColor = "secondary.500";

  const textHoverColor = "secondary.200";
  const bgHoverColor = "secondary.800";
  const borderHoverColor = "secondary.500";
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

export default ButtonSecondaryXsOutlined;
