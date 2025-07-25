import { CustomSvgProps } from "./IIcons";

export const PlusIcon: React.FC<CustomSvgProps> = ({
  size = 24,
  color, // = "neutral.main", // "#F7F5FA"
  className,
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
        d="M6 12H18"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V18"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
