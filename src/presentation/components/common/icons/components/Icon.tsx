import React, { memo } from "react";
import icons from "src/presentation/components/common/icons";
import { StyledIcon } from "./Icon.styles";
import { IconProps } from "./Icon.types";

const IconComponent = ({
  name,
  w,
  h,
  color = "currentColor",
  onClick,
  className,
}: IconProps) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <StyledIcon className={className} onClick={onClick}>
      <SvgIcon w={w} h={h} color={color} />
    </StyledIcon>
  );
};

export const Icon = memo(IconComponent);
