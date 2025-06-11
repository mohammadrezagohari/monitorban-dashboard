import React, { useState } from "react";
// import { Eye } from "src/presentation/components/common/icons/Eye";
// import ButtonPrimaryLgFilled from "../buttons/ButtonPrimaryLargeFilled";
// import ButtonPrimaryMdFilled from "../buttons/ButtonPrimaryMediumFilled";
// import ButtonPrimarySmFilled from "../buttons/ButtonPrimarySmallFilled";
// import ButtonPrimaryXsFilled from "../buttons/ButtonPrimaryXsmallFilled";
// import ButtonPrimaryXxsFilled from "../buttons/ButtonPrimaryXxsmallFilled";
// import ButtonPrimaryLgOutlined from "../buttons/ButtonPrimaryLargeOutlined";
// import ButtonPrimaryMdOutlined from "../buttons/ButtonPrimaryMediumOutlined";
// import ButtonPrimarySmOutlined from "../buttons/ButtonPrimarySmallOutlined";
// import ButtonPrimaryXsOutlined from "../buttons/ButtonPrimaryXsmallOutlined";
// import ButtonPrimaryXxsOutlined from "../buttons/ButtonPrimaryXxsmallOutlined";
// import ButtonPrimaryLgText from "../buttons/ButtonPrimaryLargeText";
// import ButtonPrimaryMdText from "../buttons/ButtonPrimaryMediumText";
// import ButtonPrimarySmText from "../buttons/ButtonPrimarySmallText";
// import ButtonPrimaryXsText from "../buttons/ButtonPrimaryXsmallText";
// import ButtonPrimaryXxsText from "../buttons/ButtonPrimaryXxsmallText";
// import ButtonSecondaryLgFilled from "../buttons/ButtonSecondaryLargeFilled";
// import ButtonSecondaryMdFilled from "../buttons/ButtonSecondaryMediumFilled";
// import ButtonSecondarySmFilled from "../buttons/ButtonSecondarySmallFilled";
// import ButtonSecondaryXsFilled from "../buttons/ButtonSecondaryXsmallFilled";
// import ButtonSecondaryXxsFilled from "../buttons/ButtonSecondaryXxsmallFilled";
// import ButtonSecondaryLgOutlined from "../buttons/ButtonSecondaryLargeOutlined";
// import ButtonSecondaryMdOutlined from "../buttons/ButtonSecondaryMediumOutlined";
// import ButtonSecondarySmOutlined from "../buttons/ButtonSecondarySmallOutlined";
// import ButtonSecondaryXsOutlined from "../buttons/ButtonSecondaryXsmallOutlined";
// import ButtonSecondaryXxsOutlined from "../buttons/ButtonSecondaryXxsmallOutlined";
// import ButtonSecondaryLgText from "../buttons/ButtonSecondaryLargeText";
// import ButtonSecondaryMdText from "../buttons/ButtonSecondaryMediumText";
// import ButtonSecondarySmText from "../buttons/ButtonSecondarySmallText";
// import ButtonSecondaryXsText from "../buttons/ButtonSecondaryXsmallText";
// import ButtonSecondaryXxsText from "../buttons/ButtonSecondaryXxsmallText";
// import ButtonErrorLgFilled from "../buttons/ButtonErrorLargeFilled";
// import ButtonErrorMdFilled from "../buttons/ButtonErrorMediumFilled";
// import ButtonErrorSmFilled from "../buttons/ButtonErrorSmallFilled";
// import ButtonErrorXsFilled from "../buttons/ButtonErrorXsmallFilled";
// import ButtonErrorXxsFilled from "../buttons/ButtonErrorXxsmallFilled";
// import ButtonErrorLgOutlined from "../buttons/ButtonErrorLargeOutlined";
// import ButtonErrorMdOutlined from "../buttons/ButtonErrorMediumOutlined";
// import ButtonErrorSmOutlined from "../buttons/ButtonErrorSmallOutlined";
// import ButtonErrorXsOutlined from "../buttons/ButtonErrorXsmallOutlined";
// import ButtonErrorXxsOutlined from "../buttons/ButtonErrorXxsmallOutlined";
// import ButtonErrorLgText from "../buttons/ButtonErrorLargeText";
// import ButtonErrorMdText from "../buttons/ButtonErrorMediumText";
// import ButtonErrorSmText from "../buttons/ButtonErrorSmallText";
// import ButtonErrorXsText from "../buttons/ButtonErrorXsmallText";
// import ButtonErrorXxsText from "../buttons/ButtonErrorXxsmallText";
// import ButtonSuccessLgFilled from "../buttons/ButtonSuccessLargeFilled";
// import ButtonSuccessMdFilled from "../buttons/ButtonSuccessMediumFilled";
// import ButtonSuccessSmFilled from "../buttons/ButtonSuccessSmallFilled";
// import ButtonSuccessXsFilled from "../buttons/ButtonSuccessXsmallFilled";
// import ButtonSuccessXxsFilled from "../buttons/ButtonSuccessXxsmallFilled";
// import ButtonSuccessLgOutlined from "../buttons/ButtonSuccessLargeOutlined";
// import ButtonSuccessMdOutlined from "../buttons/ButtonSuccessMediumOutlined";
// import ButtonSuccessSmOutlined from "../buttons/ButtonSuccessSmallOutlined";
// import ButtonSuccessXsOutlined from "../buttons/ButtonSuccessXsmallOutlined";
// import ButtonSuccessXxsOutlined from "../buttons/ButtonSuccessXxsmallOutlined";
// import ButtonSuccessLgText from "../buttons/ButtonSuccessLargeText";
// import ButtonSuccessMdText from "../buttons/ButtonSuccessMediumText";
// import ButtonSuccessSmText from "../buttons/ButtonSuccessSmallText";
// import ButtonSuccessXsText from "../buttons/ButtonSuccessXsmallText";
// import ButtonSuccessXxsText from "../buttons/ButtonSuccessXxsmallText";
// import BaseBreadCrumb from "../breadcrumb/BaseBreadcrumb";
import Sidebar from "src/presentation/components/sidebar/Sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ButtonPrimarySmallText from "../buttons/ButtonPrimarySmallText";
import { ArrowRightIcon } from "src/presentation/components/common/icons/ArrowRightIcon";
import { DashboardIcon } from "src/presentation/components/common/icons/DashboardIcon";
import { SensorIcon } from "src/presentation/components/common/icons/SensorIcon";
import { AirConditionerIcon } from "src/presentation/components/common/icons/AirConditionerIcon";
import { ComplaintIcon } from "src/presentation/components/common/icons/ComplaintIcon";
import { UsersIcon } from "src/presentation/components/common/icons/UsersIcon";
import { VideoIcon } from "src/presentation/components/common/icons/VideoIcon";
import { SupportIcon } from "src/presentation/components/common/icons/SupportIcon";
import { SettingIcon } from "src/presentation/components/common/icons/SettingIcon";
import { navItems, usersInfo } from "./data";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BaseMenuItem from "../menu/BaseMenuItem";
import { MenuIcon } from "src/presentation/components/common/icons/MenuIcon";
import { CloseIcon } from "src/presentation/components/common/icons/CloseIcon";
import { LogoIcon } from "src/presentation/components/common/icons/LogoIcon";
import Users from "./user-management/UsersPage";
import UserPage from "./user-management/UserPage";
import ChangePasswordPage from "./user-management/ChangePasswordPage";
import RolesPage from "./user-management/RolesPage";
import UserManagement from "./user-management/UserManagementPage";
import EditRolePage from "./user-management/EditRolePage";
import CustomSteper from "src/presentation/components/common/stepper/CustomStepper";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import AddAccesses from "./user-management/AddAccesses";
import BaseCheckbox from "../base-checkbox/BaseCheckbox";
import { CheckedIcon } from "src/presentation/components/common/icons/CheckedIcon";
import { UncheckedIcon } from "src/presentation/components/common/icons/UncheckedIcon";

export default function Test() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [pageIndex, setPageIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const logedInUser = usersInfo[0];

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((open) => !open);
  };

  const handleMenuClick = (index: number) => {
    setPageIndex(index);
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1.5rem",
        // alignItems: "center",
        padding: {
          md: "1.5rem 1.142vw ",
          xs: "5.5rem 1rem",
        },
        flexWrap: "wrap",
        // bgcolor: "#222",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // display: "grid",
          // gridTemplateColumns: "1fr auto",
          gap: { md: "24px" },
          width: "100%",
        }}
      >
        {!isDesktop && (
          <AppBar
            position="fixed"
            sx={{ bgcolor: !mobileOpen ? "#1C1926" : "#0E0C15" }}
          >
            <Toolbar
              sx={{
                p: 2,
                bgcolor: "#1c1926",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <IconButton sx={{ bgcolor: "#373040", ml: 1 }}>
                  <ArrowRightIcon color="#F7F5FA" />
                </IconButton>
                <IconButton
                  // color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ bgcolor: "#373040", width: 40, height: 40 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Link to="dashboard" style={{ marginLeft: 48 }}>
                <LogoIcon />
              </Link>
              <Avatar src={usersInfo[0].image} sx={{ width: 40, height: 40 }} />
            </Toolbar>
          </AppBar>
        )}

        <Box component="nav">
          {!isDesktop && (
            <Drawer
              anchor="right"
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                "& .MuiDrawer-paper": {
                  // padding: "1rem",
                  width: 250,
                  height: "auto",
                  borderRadius: "15px 0 0 15px",
                  bgcolor: "#1C1926",
                },
              }}
            >
              <IconButton
                component="button"
                onClick={handleDrawerToggle}
                sx={{
                  m: "1rem 1rem 0",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#373040",
                  color: "#F7F5FA",
                }}
              >
                <CloseIcon size={20} />
              </IconButton>
              <List>
                {navItems.map((item, index) => (
                  <BaseMenuItem
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    active={pageIndex === index}
                    onClick={() => handleMenuClick(index)}
                    href={item.href}
                  />
                ))}
              </List>
            </Drawer>
          )}

          {isDesktop && (
            <Sidebar
              items={navItems}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              activedUser={logedInUser}
            />
          )}
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            width: { md: "calc(100vw - 322px)", xs: "100%" },
            // mt: { xs: "64px", sm: 0 },
            // width: "100%",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <ButtonPrimarySmallText
              rightIcon={<ArrowRightIcon />}
              onClick={() => navigate(-1)}
            >
              بازگشت
            </ButtonPrimarySmallText>
            {/* <BaseBreadCrumb paths={navItems} /> */}
          </Box>
          {/* <Outlet /> */}
          <AddAccesses />
          {/* 
          <Box mb={5}>
            <SectionContainer>
              <CustomSteper />
            </SectionContainer>
          </Box>
            <EditRolePage />
          <RolesPage />
          <ChangePasswordPage />
          <Users />
          <UserPage activedUser={logedInUser} /> */}
        </Box>
        {/* <Main /> */}
      </Box>
    </Box>
  );
}
