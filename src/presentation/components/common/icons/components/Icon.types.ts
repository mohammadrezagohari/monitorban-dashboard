import { IconName } from "..";

export interface IconProps {
  name: IconName;
  w?: number;
  h?: number;
  color?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}