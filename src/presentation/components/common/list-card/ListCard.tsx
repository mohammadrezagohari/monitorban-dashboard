import useScreenSize from "@/presentation/hooks/useScreenSize";
import { Box, useTheme } from "@mui/material";
import { createContext, useContext } from "react";
import Avatar from "../avatar/Avatar";
import Checkbox from "../checkbox/Checkbox";
import { Text } from "../dashboard-card/BaseDashboardCard.style";
import { Icon } from "../icons/components/Icon";
import TagHeading from "../tag-heading/TagHeading";
import Tag from "../tag/Tag";
import {
  FirstDetailsProps,
  ListCardContextType,
  ListCardProps,
  OperationsProps,
  SecondDetailsProps,
} from "./IListCard";
import {
  StyledDetail,
  StyledListCard,
  StyledOperations,
  StyledTitle,
} from "./ListCard.styles";

const ListCardContext = createContext<ListCardContextType>({
  columns: "",
  item: null,
});

function ListCard({ children, columns, item, selectable }: ListCardProps) {
  return (
    <ListCardContext.Provider value={{ columns, item, selectable }}>
      <StyledListCard columns={columns}>{children}</StyledListCard>
    </ListCardContext.Provider>
  );
}

function Title() {
  const { item, selectable } = useContext(ListCardContext);
  const { avatar, title, caption, icon = "user" } = item;
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  return (
    <StyledTitle>
      {selectable && <Checkbox iconSize={24} />}

      <Avatar src={avatar} size={isMediumScreen ? 48 : 32}>
        <Icon
          name={icon}
          w={isMediumScreen ? 24 : 16}
          h={isMediumScreen ? 24 : 16}
          color={theme.palette.neutral.main}
        />
      </Avatar>

      <Box>
        <Text color="neutral.50" component="h4" variant="h4">
          {title}
        </Text>
        <Text color="neutral.200" variant="body2">
          {caption}
        </Text>
      </Box>
    </StyledTitle>
  );
}

function ShowFirstDetails({ label }: FirstDetailsProps) {
  const { item } = useContext(ListCardContext);
  const { firstDetailItems } = item;

  console.log("item => ", item);
  return (
    <StyledDetail>
      <TagHeading>{label} :</TagHeading>
      <Box>
        {firstDetailItems?.slice(0, 2).map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </Box>
    </StyledDetail>
  );
}

function ShowSecondDetails({ label, count = 3 }: SecondDetailsProps) {
  const { item } = useContext(ListCardContext);
  const { secondDetailItems } = item;

  return (
    <StyledDetail>
      <TagHeading>{label} :</TagHeading>
      <Box>
        {secondDetailItems?.slice(0, count).map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </Box>
    </StyledDetail>
  );
}

function ShowStatus() {
  const { item } = useContext(ListCardContext);
  const { status } = item;
  let tag = "";
  switch (status) {
    case "normal":
      tag = "نرمال";
      break;
    case "warning":
      tag = "اخطار";
      break;
    case "danger":
      tag = "بحرانی";
      break;

    default:
      break;
  }

  return (
    <StyledDetail>
      <TagHeading>وضعیت کلی :</TagHeading>
      <Tag type={status}>{tag}</Tag>
    </StyledDetail>
  );
}

function Operations({ children }: OperationsProps) {
  return <StyledOperations>{children}</StyledOperations>;
}

ListCard.Title = Title;
ListCard.ShowFirstDetails = ShowFirstDetails;
ListCard.ShowSecondDetails = ShowSecondDetails;
ListCard.ShowStatus = ShowStatus;
ListCard.Operations = Operations;

export default ListCard;
