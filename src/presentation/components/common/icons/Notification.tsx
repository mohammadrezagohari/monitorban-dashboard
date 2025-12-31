import React from "react";
import { IconSvgProps } from "./types";

const Notification = ({
  w = 24,
  h = 24,
  color = "currentColor",
}: IconSvgProps) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0196 2.82983C8.7096 2.82983 6.0196 5.44575 6.0196 8.66459V11.475C6.0196 12.0682 5.7596 12.9726 5.4496 13.4783L4.2996 15.3357C3.5896 16.4832 4.0796 17.7571 5.3796 18.185C9.6896 19.5853 14.3396 19.5853 18.6496 18.185C19.8596 17.796 20.3896 16.4054 19.7296 15.3357L18.5796 13.4783C18.2796 12.9726 18.0196 12.0682 18.0196 11.475V8.66459C18.0196 5.45548 15.3196 2.82983 12.0196 2.82983Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8699 3.1119C13.5599 3.02437 13.2399 2.9563 12.9099 2.9174C11.9499 2.80071 11.0299 2.86878 10.1699 3.1119C10.4599 2.39228 11.1799 1.8866 12.0199 1.8866C12.8599 1.8866 13.5799 2.39228 13.8699 3.1119Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0195 18.5352C15.0195 20.1397 13.6695 21.4525 12.0195 21.4525C11.1995 21.4525 10.4395 21.1219 9.89953 20.5968C9.35953 20.0716 9.01953 19.3326 9.01953 18.5352"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Notification;
