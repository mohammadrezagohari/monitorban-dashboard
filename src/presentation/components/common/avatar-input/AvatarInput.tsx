import { Typography, useTheme } from "@mui/material";

import Button from "../buttons/Button";
import { HouseIcon } from "src/presentation/assets/icons/HouseIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import {
  ButtonsContainer,
  IconContainer,
  StyledIconButton,
  StyledImageInputContainer,
} from "./AvatarInput.styles";

function AvatarInput() {
  const theme = useTheme();
  return (
    <StyledImageInputContainer>
      <IconContainer>
        <IconWrapper>
          <HouseIcon color={theme.palette.primary[200]} />
        </IconWrapper>
        <Typography variant="body2" color="neutral.200">
          عکس آیکون
        </Typography>
      </IconContainer>
      <ButtonsContainer>
        <Button variant="outlined" size="xxsmall" colorType="primary">
          بارگذاری عکس
        </Button>
        <StyledIconButton>
          <DeleteIcon size={16} />
        </StyledIconButton>
      </ButtonsContainer>
    </StyledImageInputContainer>
  );
}

export default AvatarInput;
