import { CustomSvgProps } from "./IIcons";

export const CheckedIcon: React.FC<CustomSvgProps> = ({
  color = "#8C32D9",
  size = 20,
  disabled,
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
      <rect
        width="24"
        height="24"
        rx="5"
        fill={disabled ? "#5B5266" : color || "currentColor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 7L9.375 16.625L5 12.25"
        fill={disabled ? "#5B5266" : color || "currentColor"}
      />
      <path
        d="M19 7L9.375 16.625L5 12.25"
        stroke="#F7F5FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
