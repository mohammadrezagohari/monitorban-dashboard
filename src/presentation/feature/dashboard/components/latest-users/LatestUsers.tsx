import { IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import { EyeIcon } from "src/presentation/assets/icons/EyeIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import UserCardMini from "src/presentation/feature/dashboard/components/latest-users/user-card-mini/UserCardMini";
import { usersInfo } from "src/presentation/data/data";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledMainContainer } from "./LatestUser.styles";

function LatestUsers() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <SectionContainer width="100%" height={246}>
      <HeaderContainer>
        <SectionTitle>آخرین کاربران</SectionTitle>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {isDesktop ? (
            <Button
              variant="outlined"
              size="xxsmall"
              colorType="primary"
              endIcon={<ArrowLeftIcon />}
              onClick={() => console.log("آخرین کاربران")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.dark}`,
                borderRadius: "10px",
                p: "7px",
              }}
            >
              <EyeIcon size={16} color={theme.palette.primary.dark} />
            </IconButton>
          )}
        </div>
      </HeaderContainer>
      <StyledMainContainer
      // sx={{
      //   display: "grid",
      //   gridTemplateColumns: { md: "repeat(2, 1fr)" },
      //   gap: "1rem",
      //   overflow: "scroll",
      //   height: "calc(100% - 55px)",
      //   "&::-webkit-scrollbar": { display: "none" },
      // }}
      >
        {usersInfo.map((item, index) => (
          <UserCardMini
            key={index}
            avatar={item.image}
            fullName={item.fullName}
            position={item.position}
          />
        ))}
      </StyledMainContainer>
    </SectionContainer>
  );
}

export default LatestUsers;
