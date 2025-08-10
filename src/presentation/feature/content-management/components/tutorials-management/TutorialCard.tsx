import { Avatar, Box, Typography } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import TagHeading from "src/presentation/components/common/tag-heading/TagHeading";
import { TutorialCardProps } from "./ITutorialManagement";
import {
  ButtonsContainer,
  DetailContainer,
  StyledTutorialCard,
  TitleBox,
  TypeBox,
} from "./TutorialManagement.styles";

function TutorialCard({ tutorial }: TutorialCardProps) {
  const { thumbnail: image, title, type } = tutorial;

  return (
    <StyledTutorialCard>
      <DetailContainer>
        <TitleBox>
          <Avatar src={image} sx={{ width: 48, height: 48 }} />

          <Typography variant="h5" color="neutral.main">
            {title}
          </Typography>
        </TitleBox>
        <TypeBox>
          <TagHeading>نوع آموزش</TagHeading>
          <Tag>{type}</Tag>
        </TypeBox>
      </DetailContainer>

      <ButtonsContainer>
        <Button variant="outlined" size="small" colorType="error">
          حذف
        </Button>
        <Button variant="outlined" size="small" colorType="primary">
          مشاهده
        </Button>
      </ButtonsContainer>
    </StyledTutorialCard>
  );
}

export default TutorialCard;
