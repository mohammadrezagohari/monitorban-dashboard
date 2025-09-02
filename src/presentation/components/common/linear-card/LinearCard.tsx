import { Typography } from "@mui/material";

import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { ContentContainer, StyledLinearCard } from "./LinearCard.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import { LinearProps } from "./ILinearCard";

function LinearCard({ icon, children, color, handleClick }: LinearProps) {
  return (
    <StyledLinearCard>
      <ContentContainer>
        <IconWrapper bgcolor={color}>{icon}</IconWrapper>
        <Typography variant="h4" color="neutral.main">
          {children}
        </Typography>
      </ContentContainer>
      <IconButtonWithBorder onClick={handleClick}>
        <ArrowLeftIcon size={16} />
      </IconButtonWithBorder>
    </StyledLinearCard>
  );
}

export default LinearCard;
