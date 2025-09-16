import { useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import ListCard from "src/presentation/components/common/list-card/ListCard";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

function GroupMembers({ members }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اعضای گروه</SectionTitle>
        {isDesktop ? (
          <Button variant="outlined" size="small" colorType="primary">
            افزودن عضو
          </Button>
        ) : (
          <IconButtonWithBorder>
            <PlusIcon size={16} />
          </IconButtonWithBorder>
        )}
      </HeaderContainer>
      <MainContainer sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {members.map((member, index) => (
          <ListCard columns="2fr 1fr 3.8fr 0.6fr" item={member} key={index}>
            <ListCard.Title />

            <ListCard.FirstDetail label="نقش" />
            <ListCard.SecondDetail label="گروه" />

            <ListCard.Operations>
              <Button
                variant="outlined"
                size={isDesktop ? "small" : "medium"}
                colorType="error"
              >
                حذف
              </Button>
              <Button
                variant="outlined"
                size={isDesktop ? "small" : "medium"}
                colorType="primary"
              >
                مشاهده
              </Button>
            </ListCard.Operations>
          </ListCard>
          // <RoleUserCard key={index} user={member} type="assigned" />
        ))}
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupMembers;
