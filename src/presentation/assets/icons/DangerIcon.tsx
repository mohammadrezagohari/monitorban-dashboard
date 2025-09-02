import { CustomSvgProps } from "./IIcons";

export const DangerIcon: React.FC<CustomSvgProps> = ({
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
        d="M12 9V14"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0004 21.41H5.94042C2.47042 21.41 1.02042 18.93 2.70042 15.9L5.82042 10.28L8.76042 5.00003C10.5404 1.79003 13.4604 1.79003 15.2404 5.00003L18.1804 10.29L21.3004 15.91C22.9804 18.94 21.5204 21.42 18.0604 21.42H12.0004V21.41Z"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9941 17H12.0031"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
