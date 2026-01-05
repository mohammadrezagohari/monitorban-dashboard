import React, { ForwardedRef, forwardRef, memo } from "react";
import icons from "@/presentation/components/common/icons";
import { StyledIcon } from "./Icon.styles";
import { IconProps } from "./Icon.types";

interface IconRef extends HTMLElement {}

const IconComponent = (
  { name, w, h, color = "currentColor", onClick, className }: IconProps,
  ref: ForwardedRef<IconRef>
) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <StyledIcon className={`${className}`} onClick={onClick} ref={ref}>
      <SvgIcon w={w} h={h} color={color} />
    </StyledIcon>
  );
};

const ForwardedIcon = forwardRef(IconComponent);
export const Icon = memo(ForwardedIcon);
