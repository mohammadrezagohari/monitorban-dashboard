import { IconSvgProps } from "./types";

const CheckMark = ({
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
        d="M19 7.1875L9.375 16.8125L5 12.4375"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckMark;
