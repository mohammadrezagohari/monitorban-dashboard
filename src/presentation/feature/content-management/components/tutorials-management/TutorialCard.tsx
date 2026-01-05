import { useMediaQuery, useTheme } from "@mui/material";

import Avatar from "@/presentation/components/common/avatar/Avatar";
import Button from "@/presentation/components/common/buttons/Button";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import TagHeading from "@/presentation/components/common/tag-heading/TagHeading";
import Tag from "@/presentation/components/common/tag/Tag";
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
          <Avatar src={image}>
            <Icon name="video" color={theme.palette.neutral.main} />
          </Avatar>

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
