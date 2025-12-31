import { IconSvgProps } from "./types";

const BurgerMenu = ({
  w = 24,
  h = 24,
  color = "currentColor",
}: IconSvgProps) => {
  return (
    <svg
      width={w}
      height={h}
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

export default BurgerMenu;
