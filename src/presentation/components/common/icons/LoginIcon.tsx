import { CustomSvgProps } from "./IIcons";

export const LoginIcon: React.FC<CustomSvgProps> = ({
  size,
  color = "#F7F5FA",
}) => {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7725 14.62L15.572 12.06L12.7725 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.37402 12.0601H15.4956"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.123 4C17.9566 4 21.8716 7 21.8716 12C21.8716 17 17.9566 20 13.123 20"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
