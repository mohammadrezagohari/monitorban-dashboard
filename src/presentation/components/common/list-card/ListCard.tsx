import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";
import { Avatar, Box } from "@mui/material";
import { createContext, ReactNode, useContext } from "react";
import { Text } from "../dashboard-card/BaseDashboardCard.style";
import TagHeading from "../tag-heading/TagHeading";
import Tag from "../tag/Tag";
import { ListCardContextType, ListCardProps } from "./IListCard";
import {
  StyledListCard,
  StyledTitle,
  StyledDetail,
  StyledOperations,
} from "./ListCard.styles";
import CustomCheckbox from "../checkbox-input/CheckBox";

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
  const { image: avatar, fullName: title, phone: caption } = item;
  return (
    <StyledTitle>
      {selectable && <CustomCheckbox size={24} />}
      {avatar ? (
        <Avatar
          src={avatar}
          // sx={{ width: 48, height: 48 }}
        />
      ) : (
        <IconWrapper>
          <UserIcon size={24} color="#F7F5FA" />
        </IconWrapper>
      )}
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

function FirstDetail({ label }: { label: string }) {
  const { item } = useContext(ListCardContext);
  const { roles } = item;

  return (
    <StyledDetail>
      <TagHeading>{label} :</TagHeading>
      <Box sx={{}}>
        {roles.slice(0, 2).map((role: string, index: number) => (
          <Tag key={index}>{role}</Tag>
        ))}
      </Box>
    </StyledDetail>
  );
}

function SecondDetail({ label }: { label: string }) {
  const { item } = useContext(ListCardContext);
  const { groups } = item;

  return (
    <StyledDetail>
      <TagHeading>{label} :</TagHeading>
      <Box>
        {groups?.slice(0, 3).map((group: string, index: number) => (
          <Tag key={index}>{group}</Tag>
        ))}
      </Box>
    </StyledDetail>
  );
}

function Operations({ children }: { children: ReactNode }) {
  return <StyledOperations>{children}</StyledOperations>;
}

ListCard.Title = Title;
ListCard.FirstDetail = FirstDetail;
ListCard.SecondDetail = SecondDetail;
ListCard.Operations = Operations;

export default ListCard;
