import { IconSvgProps } from "./types";

const CalendarTick = ({
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
        d="M2.40039 8.90479H22.4004"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.40039 16.9048H8.40039"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9004 16.9048H14.9004"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.84039 3.90479H17.9504C21.5104 3.90479 22.4004 4.78479 22.4004 8.29479V16.5048C22.4004 20.0148 21.5104 20.8948 17.9604 20.8948H6.84039C3.29039 20.9048 2.40039 20.0248 2.40039 16.5148V8.29479C2.40039 4.78479 3.29039 3.90479 6.84039 3.90479Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarTick;
