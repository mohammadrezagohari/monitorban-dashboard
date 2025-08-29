import { CustomSvgProps } from "./IIcons";

export const UncheckedIcon: React.FC<CustomSvgProps> = ({
  color = "#9B92A6",
  size = 20,
  disabled,
  className,
  ...rest
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="4.5"
        stroke={disabled ? "#5B5266" : color || "currentColor"}
      />
    </svg>
  );
};
