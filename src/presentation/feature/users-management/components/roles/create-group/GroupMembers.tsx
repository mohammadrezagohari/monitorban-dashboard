import { useMediaQuery, useTheme } from "@mui/material";

import IconButton from "@/presentation/components/common/icon-button/IconButton";
import Button from "@/presentation/components/common/buttons/Button";
import ListCard from "@/presentation/components/common/list-card/ListCard";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";

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
          <IconButton iconName="plus" />
        )}
      </HeaderContainer>
      <MainContainer sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {members.map((member, index) => (
          <ListCard columns="2fr 1fr 3.8fr 0.6fr" item={member} key={index}>
            <ListCard.Title />

            <ListCard.ShowFirstDetails label="نقش" />
            <ListCard.ShowSecondDetails label="گروه" />

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
