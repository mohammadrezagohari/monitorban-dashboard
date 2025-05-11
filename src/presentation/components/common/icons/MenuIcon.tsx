import { CustomSvgProps } from "./IIcons";

export const MenuIcon: React.FC<CustomSvgProps> = ({
  size = 20,
  color = "#F7F5FA", // "neutral.main"
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7H17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 12.1666L18 12.1666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
