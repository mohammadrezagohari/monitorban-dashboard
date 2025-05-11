import React from "react";
import { CustomSvgProps } from "./IIcons";

export const BulletIcon: React.FC<CustomSvgProps> = ({ color, size = 12 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill={color} />
    </svg>
  );
};
