import { ButtonCustom } from "src/presentation/components/common/button/ButtonCustom";
import { IButtons } from "../../components/common/button/IButtons";

const ButtonSuccessMediumOutlined: React.FC<IButtons> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
}) => {
  const textColor = "success.400";
  const bgColor = "";
  const borderColor = "success.400";

  const textHoverColor = "success.400";
  const bgHoverColor = "success.800";
  const borderHoverColor = "success.400";
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

export default ButtonSuccessMediumOutlined;
