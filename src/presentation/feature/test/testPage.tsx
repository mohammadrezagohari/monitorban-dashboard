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
import { Outlet } from "react-router-dom";
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

export default function Test() {
  const navItems = [
    {
      label: "داشبورد",
      icon: <DashboardIcon />,
      href: "/test/dashboard",
    },
    {
      label: "سنسورها",
      icon: <SensorIcon />,
      href: "/test/sensors",
    },
    {
      label: "اتاق سرور",
      icon: <AirConditionerIcon />,
      href: "/test/server-room",
    },
    {
      label: "گزارشات",
      icon: <ComplaintIcon />,
      href: "/test/reports",
    },
    {
      label: "مدیریت کاربران",
      icon: <UsersIcon />,
      href: "/test/user-managment",
    },
    {
      label: "آموزش ها",
      icon: <VideoIcon />,
      href: "/test/educations",
    },
    {
      label: "پشتیبانی",
      icon: <SupportIcon />,
      href: "/test/support",
    },
    {
      label: "تنظیمات",
      icon: <SettingIcon />,
      href: "/test/settings",
    },
  ];
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        // alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        backgroundColor: "#222",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          // display: "grid",
          // gridTemplateColumns: "1fr auto",
          gap: "24px",
        }}
      >
        <Sidebar
          items={navItems}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <ButtonPrimarySmallText rightIcon={<ArrowRightIcon />}>
              بازگشت
            </ButtonPrimarySmallText>
            {/* <BaseBreadCrumb paths={navItems} /> */}
          </div>
          <Outlet />
        </div>
        {/* <Main /> */}
      </div>
      {/* Prime */}
      {/* <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonPrimaryLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonPrimaryLgFilled>
        <ButtonPrimaryMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryMdFilled>
        <ButtonPrimarySmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimarySmFilled>
        <ButtonPrimaryXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXsFilled>
        <ButtonPrimaryXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonPrimaryLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonPrimaryLgOutlined>
        <ButtonPrimaryMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryMdOutlined>
        <ButtonPrimarySmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimarySmOutlined>
        <ButtonPrimaryXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXsOutlined>
        <ButtonPrimaryXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonPrimaryLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonPrimaryLgText>
        <ButtonPrimaryMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryMdText>
        <ButtonPrimarySmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimarySmText>
        <ButtonPrimaryXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXsText>
        <ButtonPrimaryXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXxsText>
      </span> */}
      {/* Second */}
      {/* <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSecondaryLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSecondaryLgFilled>
        <ButtonSecondaryMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryMdFilled>
        <ButtonSecondarySmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondarySmFilled>
        <ButtonSecondaryXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXsFilled>
        <ButtonSecondaryXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSecondaryLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSecondaryLgOutlined>
        <ButtonSecondaryMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryMdOutlined>
        <ButtonSecondarySmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondarySmOutlined>
        <ButtonSecondaryXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXsOutlined>
        <ButtonSecondaryXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSecondaryLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSecondaryLgText>
        <ButtonSecondaryMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryMdText>
        <ButtonSecondarySmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondarySmText>
        <ButtonSecondaryXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXsText>
        <ButtonSecondaryXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXxsText>
      </span> */}
      {/* Error */}
      {/* <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonErrorLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonErrorLgFilled>
        <ButtonErrorMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorMdFilled>
        <ButtonErrorSmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorSmFilled>
        <ButtonErrorXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXsFilled>
        <ButtonErrorXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonErrorLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonErrorLgOutlined>
        <ButtonErrorMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorMdOutlined>
        <ButtonErrorSmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorSmOutlined>
        <ButtonErrorXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXsOutlined>
        <ButtonErrorXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonErrorLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonErrorLgText>
        <ButtonErrorMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorMdText>
        <ButtonErrorSmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorSmText>
        <ButtonErrorXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXsText>
        <ButtonErrorXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXxsText>
      </span> */}
      {/* Success */}
      {/* <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSuccessLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSuccessLgFilled>
        <ButtonSuccessMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessMdFilled>
        <ButtonSuccessSmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessSmFilled>
        <ButtonSuccessXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXsFilled>
        <ButtonSuccessXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSuccessLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSuccessLgOutlined>
        <ButtonSuccessMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessMdOutlined>
        <ButtonSuccessSmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessSmOutlined>
        <ButtonSuccessXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXsOutlined>
        <ButtonSuccessXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSuccessLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSuccessLgText>
        <ButtonSuccessMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessMdText>
        <ButtonSuccessSmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessSmText>
        <ButtonSuccessXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXsText>
        <ButtonSuccessXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXxsText>
      </span> */}
    </div>
  );
}