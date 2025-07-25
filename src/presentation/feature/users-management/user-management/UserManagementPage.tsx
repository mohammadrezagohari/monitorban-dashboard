import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { Box, IconButton, Typography } from "@mui/material";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { UserSquareIcon } from "src/presentation/assets/icons/UserSquareIcon";
import { ReactElement } from "react";
import { ListIcon } from "src/presentation/assets/icons/ListIcon";
import { TwoUserIcon } from "src/presentation/assets/icons/TwoUsersIcon";

export default function UserManagement() {
  return (
    <>
      <PageTitle title="مدیریت کاربران" />

      <SectionContainer>
        <MainContainer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
              gap: { xs: 1, md: 2 },
            }}
          >
            <UserCard
              title="کاربران"
              color="#9BD6B6"
              icon={<UserSquareIcon color="#0E0C15" size={24} />}
            />
            <UserCard
              title="نقش ها"
              color="#D69BA9"
              icon={<ListIcon color="#0E0C15" size={24} />}
            />
            <UserCard
              title="گروه ها"
              color="#9BAFD6"
              icon={<TwoUserIcon color="#0E0C15" size={24} />}
            />
          </Box>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

// TODO::
function UserCard({
  icon,
  title,
  color,
}: {
  icon: ReactElement;
  title: string;
  color: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#373040",
        borderRadius: "15px",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconWrapper bgcolor={color}>{icon}</IconWrapper>
        <Typography
          // component="h4"
          variant="h4"
          color="neutral.main"
          sx={{
            typography: { xs: "body2", md: "h4" },
            // typography: "h1",
          }}
        >
          {title}
        </Typography>
      </Box>
      <IconButton
        sx={{
          border: `1px solid #7F6A95`,
          borderRadius: "10px",
        }}
      >
        <ArrowLeftIcon color="#7F6A95" size={16} />
      </IconButton>
    </Box>
  );
}
