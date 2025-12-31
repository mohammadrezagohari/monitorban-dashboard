import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

import Button from "src/presentation/components/common/buttons/Button";
import { Text } from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Icon } from "src/presentation/components/common/icons/components/Icon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Tag from "src/presentation/components/common/tag/Tag";

function UserAccessibility() {
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی ها</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن دسترسی
        </Button>
      </HeaderContainer>
      <MainContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Box>
          <Button
            variant="outlined"
            size="large"
            colorType="primary"
            rightIcon="filterSquare"
            leftIcon={sortIsOpen ? "arrowUp" : "arrowDown"}
            onClick={() => setSortIsOpen((sort) => !sort)}
          >
            مرتب سازی
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Text color="neutral.main" variant="body1">
            <Icon
              name="bullet"
              // @ts-ignore
              color={theme.palette.primary[300]}
              w={12}
              h={12}
            />
            دسترسی از نقش
          </Text>

          <Text color="neutral.main" variant="body1">
            {/* @ts-ignore */}
            <Icon
              name="bullet"
              // @ts-ignore
              color={theme.palette.secondary[300]}
              w={12}
              h={12}
            />
            دسترسی بصورت جداگانه
          </Text>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4" color="neutral.200">
            اتاق سرور معاونت
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tag>مدیریت کاربر</Tag>
              <Tag>تنظیمات رنگ پنل</Tag>
              <Tag>مدیریت آموزش ها</Tag>
              <Tag>سنسور دمای اتاق سرور شماره 1 معاونت</Tag>
              <Tag type="secondary">
                <Icon
                  name="close"
                  w={20}
                  h={20}
                  // onClick={() => handleGroupsDelete(group)}
                />
                سنسور رطوبت اتاق سرور شماره 2 معاونت
              </Tag>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tag>مدیریت کاربر</Tag>
              <Tag>تنظیمات رنگ پنل</Tag>
              <Tag>مدیریت آموزش ها</Tag>
              <Tag>سنسور دمای اتاق سرور شماره 1 معاونت</Tag>
              <Tag>سنسور رطوبت اتاق سرور شماره 2 معاونت</Tag>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4" color="neutral.200">
            اتاق سرور پیامبر اعظم
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tag>مدیریت کاربر</Tag>
              <Tag>تنظیمات رنگ پنل</Tag>
              <Tag>مدیریت آموزش ها</Tag>
              <Tag>سنسور دمای اتاق سرور شماره 1 معاونت</Tag>
              <Tag>سنسور رطوبت اتاق سرور شماره 2 معاونت</Tag>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tag>مدیریت کاربر</Tag>
              <Tag>تنظیمات رنگ پنل</Tag>
              <Tag>مدیریت آموزش ها</Tag>
              <Tag>سنسور دمای اتاق سرور شماره 1 معاونت</Tag>
              <Tag>سنسور رطوبت اتاق سرور شماره 2 معاونت</Tag>
            </Box>
          </Box>
        </Box>
      </MainContainer>
    </SectionContainer>
  );
}

export default UserAccessibility;
