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
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import useScreenSize from "@/presentation/hooks/useScreenSize";

function GroupMembers({ members }) {
  console.log("meberssssss => ", members);
  const theme = useTheme();
  const { isLargeScreen, isMediumScreen } = useScreenSize();

  const handleAddGroup = () => {
    console.log("Add group");
  };
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اعضای گروه</SectionTitle>
        {isMediumScreen ? (
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            onClick={handleAddGroup}
          >
            افزودن عضو
          </Button>
        ) : (
          <IconButton iconName="plus" />
        )}
      </HeaderContainer>
      <MainContainer sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {members.length > 0 ? (
          members.map((member) => (
            <ListCard
              columns="2fr 1fr 3.8fr 0.6fr"
              item={{
                avatar: member.image,
                title: member.fullName,
                caption: member.phone,
                firstDetailItems: member.roles,
                secondDetailItems: member.groups,
                ...member,
              }}
              key={member.id}
            >
              <ListCard.Title />

              <ListCard.ShowFirstDetails label="نقش" />
              <ListCard.ShowSecondDetails label="گروه" />

              <ListCard.Operations>
                <Button
                  variant="outlined"
                  size={isLargeScreen ? "small" : "medium"}
                  colorType="error"
                >
                  حذف
                </Button>
                <Button
                  variant="outlined"
                  size={isLargeScreen ? "small" : "medium"}
                  colorType="primary"
                >
                  مشاهده
                </Button>
              </ListCard.Operations>
            </ListCard>
            // <RoleUserCard key={index} user={member} type="assigned" />
          ))
        ) : (
          <EmptyData handleClick={handleAddGroup} label="عضو" />
        )}
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupMembers;
