import { CustomSvgProps } from "./IIcons";

export const TickIcon: React.FC<CustomSvgProps> = ({
  size = 24,
  className,
  color, //= "#F7F5FA",
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L9.32706 17L20 7"
        stroke={color || "currentColor"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
