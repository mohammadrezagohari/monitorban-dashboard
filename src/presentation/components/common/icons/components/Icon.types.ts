import { IconName } from "..";

export interface IconProps {
  name: IconName;
  w?: number;
  h?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}