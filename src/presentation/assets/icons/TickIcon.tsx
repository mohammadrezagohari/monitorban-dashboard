import { CustomSvgProps } from "./IIcons";

export const TickIcon: React.FC<CustomSvgProps> = ({
  size = 24,
  className,
  color,
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
      <path
        d="M4 12L9.32706 17L20 7"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
