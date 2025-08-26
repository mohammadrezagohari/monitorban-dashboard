import { Avatar, Typography, useMediaQuery, useTheme } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import TagHeading from "src/presentation/components/common/tag-heading/TagHeading";
import { TutorialCardProps } from "./ITutorialManagement";
import {
  ButtonsContainer,
  CardTitle,
  DetailContainer,
  StyledTutorialCard,
  TitleBox,
  TypeBox,
} from "./TutorialManagement.styles";

function TutorialCard({ tutorial }: TutorialCardProps) {
  const { thumbnail: image, title, type } = tutorial;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledTutorialCard>
      <DetailContainer>
        <TitleBox>
          <Avatar src={image} sx={{ width: 48, height: 48 }} />

          <CardTitle>{title}</CardTitle>
        </TitleBox>
        <TypeBox>
          <TagHeading>نوع آموزش</TagHeading>
          <Tag>{type}</Tag>
        </TypeBox>
      </DetailContainer>

      <ButtonsContainer>
        <Button
          variant="outlined"
          size={isDesktop ? "small" : "xxsmall"}
          colorType="error"
        >
          حذف
        </Button>
        <Button
          variant="outlined"
          size={isDesktop ? "small" : "xxsmall"}
          colorType="primary"
        >
          مشاهده
        </Button>
      </ButtonsContainer>
    </StyledTutorialCard>
  );
}

export default TutorialCard;
