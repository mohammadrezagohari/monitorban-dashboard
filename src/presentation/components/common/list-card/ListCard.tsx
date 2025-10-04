import { Box, useMediaQuery, useTheme } from "@mui/material";
import { createContext, ReactElement, ReactNode, useContext } from "react";
import { Text } from "../dashboard-card/BaseDashboardCard.style";
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
  StyledListCard,
  StyledTitle,
  StyledDetail,
  StyledOperations,
} from "./ListCard.styles";
import Checkbox from "../checkbox/Checkbox";
import Avatar from "../avatar/Avatar";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";

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
  const { avatar, title, caption, icon = "userIcon" } = item;
  const Icon = iconsMap[icon as keyof typeof iconsMap];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledTitle>
      {selectable && <Checkbox iconSize={24} />}

      <Avatar src={avatar} size={isDesktop ? 48 : 32}>
        <Icon size={isDesktop ? 24 : 16} color={theme.palette.neutral.main} />
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

  return (
    <StyledDetail>
      <TagHeading>{label} :</TagHeading>
      <Box>
        {firstDetailItems.slice(0, 2).map((item: string) => (
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
