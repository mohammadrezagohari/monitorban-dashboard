import React from "react";
import { CustomSvgProps } from "./IIcons";

export const MobileIcon: React.FC<CustomSvgProps> = ({
  color, // = "#F7F5FA",
  size = 20,
  className,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size / 0.8}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3994 4.33332V11.6667C12.3994 14.6 11.666 15.3333 8.73268 15.3333H4.33268C1.39935 15.3333 0.666016 14.6 0.666016 11.6667V4.33332C0.666016 1.39999 1.39935 0.666656 4.33268 0.666656H8.73268C11.666 0.666656 12.3994 1.39999 12.3994 4.33332Z"
        stroke={color || "currentColor"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99974 3.23334H5.06641"
        stroke={color || "currentColor"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.53315 13.2067C7.16091 13.2067 7.66982 12.6977 7.66982 12.07C7.66982 11.4422 7.16091 10.9333 6.53315 10.9333C5.90539 10.9333 5.39648 11.4422 5.39648 12.07C5.39648 12.6977 5.90539 13.2067 6.53315 13.2067Z"
        stroke={color || "currentColor"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
