import React from "react";
import { Icon } from "../icons/components/Icon";
import { StyledVideoCardButton } from "./VideoCardButton.styles";

export const VideoCardButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <StyledVideoCardButton onClick={onClick}>
      <span>{children}</span>
      <Icon name="arrowLeftIos" w={20} h={20} />
    </StyledVideoCardButton>
  );
};
