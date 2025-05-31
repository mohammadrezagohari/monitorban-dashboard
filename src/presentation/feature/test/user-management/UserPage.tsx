import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import ButtonPrimarySmallOutlined from "../../buttons/ButtonPrimarySmallOutlined";
import ButtonPrimarySmallFilled from "../../buttons/ButtonPrimarySmallFilled";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import BaseInput from "../../input/BaseInput";
import ButtonPrimaryXxsmallOutlined from "../../buttons/ButtonPrimaryXxsmallOutlined";
import { DeleteIcon } from "src/presentation/components/common/icons/DeleteIcon";
import { CloseIcon } from "src/presentation/components/common/icons/CloseIcon";
import { useState } from "react";
import { VisibleEyeIcon } from "src/presentation/components/common/icons/VisibleEyeIcon";
import { HiddenEyeIcon } from "src/presentation/components/common/icons/HiddenEyeIcon";

export default function UserPage({ activedUser }: { activedUser: any }) {
  const [userRoles, setUserRoles] = useState(activedUser.roles);
  const [userGroups, setUserGroups] = useState(activedUser.groups);

  const handleRolesDelete = (role: string) => {
    console.log(role);
    setUserRoles((prevRoles: string[]) =>
      prevRoles.filter((item: string) => item !== role)
    );
  };
  const handleGroupsDelete = (group: string) => {
    console.log(group);
    setUserGroups((prevGroups: string[]) =>
      prevGroups.filter((item: string) => item !== group)
    );
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <PageTitle>صفحه کاربر</PageTitle>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ButtonPrimarySmallOutlined>انصراف</ButtonPrimarySmallOutlined>
          <ButtonPrimarySmallFilled>ذخیره تغییرات</ButtonPrimarySmallFilled>
        </Box>
      </Box>

      {/* Main */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>اطلاعات کاربر</SectionTitle>
          </HeaderContainer>
          <MainContainer
            sx={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1.2fr 1fr",
              gap: 2,
            }}
          >
            <BaseInput label="نام کاربر" />

            <BaseInput label="شماره تماس" />
            <Box>
              <Typography variant="body1" color="neutral.200" mb={0.5}>
                پروفایل
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    width: 90,
                  }}
                >
                  {/* <IconWrapper bgcolor="#4D4259">
                    <HouseIcon color="#C9A8E5" />
                  </IconWrapper> */}
                  <Avatar src={activedUser.image} />
                  <Typography variant="body2" color="neutral.200">
                    عکس پروفایل
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ButtonPrimaryXxsmallOutlined>
                    بارگذاری عکس
                  </ButtonPrimaryXxsmallOutlined>
                  <IconButton
                    sx={{
                      border: "1px solid #E8383B",
                      borderRadius: "10px",
                      p: "7px",
                    }}
                  >
                    <DeleteIcon size={16} color="#E8383B" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>اطلاعات امنیتی</SectionTitle>
            <Box>
              <ButtonPrimarySmallOutlined>
                تغییر رمز عبور
              </ButtonPrimarySmallOutlined>
            </Box>
          </HeaderContainer>
          <MainContainer>
            <BaseInput
              label="رمز عبور"
              type="password"
              primaryIcon={<VisibleEyeIcon />}
              secondaryIcon={<HiddenEyeIcon />}
            />
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>نقش های کاربر</SectionTitle>
            <ButtonPrimarySmallOutlined>افزودن نقش</ButtonPrimarySmallOutlined>
          </HeaderContainer>
          <MainContainer
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {userRoles.map((role: string, index: number) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <IconButton
                  sx={{ p: 0, color: "inherit" }}
                  onClick={() => handleRolesDelete(role)}
                >
                  <CloseIcon size={20} />
                </IconButton>
                {role}
              </Typography>
            ))}
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>گروه ها</SectionTitle>
            <ButtonPrimarySmallOutlined>افزودن گروه</ButtonPrimarySmallOutlined>
          </HeaderContainer>
          <MainContainer
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {userGroups.map((group: string, index: number) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <IconButton
                  sx={{ p: 0, color: "inherit" }}
                  onClick={() => handleGroupsDelete(group)}
                >
                  <CloseIcon size={20} />
                </IconButton>
                {group}
              </Typography>
            ))}
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>دسترسی ها</SectionTitle>
            <ButtonPrimarySmallOutlined>
              افزودن دسترسی
            </ButtonPrimarySmallOutlined>
          </HeaderContainer>
          <MainContainer></MainContainer>
        </SectionContainer>
      </Box>
    </Box>
  );
}
