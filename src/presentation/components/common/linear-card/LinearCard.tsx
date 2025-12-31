import { Typography } from "@mui/material";

import IconButton from "../icon-button/IconButton";
import { IconWrapper } from "../icons/IconWrapper.style";
import { Icon } from "../icons/components/Icon";
import { LinearProps } from "./ILinearCard";
import { ContentContainer, StyledLinearCard } from "./LinearCard.styles";

function LinearCard({
  icon,
  iconColor,
  children,
  color,
  handleClick,
}: LinearProps) {
  return (
    <StyledLinearCard>
      <ContentContainer>
        {icon && (
          <IconWrapper bgcolor={color}>
            <Icon name={icon} color={iconColor} />
          </IconWrapper>
        )}
        <Typography variant="h4" color="neutral.main">
          {children}
        </Typography>
      </ContentContainer>

      <IconButton
        iconName="arrowLeft"
        variant="outlined"
        onClick={handleClick}
      />
    </StyledLinearCard>
  );
}

export default LinearCard;
