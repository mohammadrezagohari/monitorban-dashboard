import { IconSvgProps } from "./types";

const Bullet = ({ w = 20, h = 20, color = "currentColor" }: IconSvgProps) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill={color} />
    </svg>
  );
};

export default Bullet;
