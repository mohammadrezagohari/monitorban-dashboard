import { IconSvgProps } from "./types";

const Checked = ({ w = 24, h = 24, color = "currentColor" }: IconSvgProps) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill={color} />
      <rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke={color} />
      <path
        d="M14.6673 6.7915L8.25065 13.2082L5.33398 10.2915"
        stroke="#F7F5FA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Checked;
