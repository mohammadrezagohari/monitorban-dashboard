import { Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { StyledBreadcrumbs } from "./Header.styles";

const pathMap: Record<string, string | null> = {
  // dashboard: null,
  "city-sensors-info": "اطلاعات سنسور ها",
  sensors: "سنسورها",
  "add-new-sensor": "افزودن سنسور جدید",
  "server-room": "اتاق سرور",
  "create-server-room": "افزودن اتاق سرور",
  "edit-server-room": "ویرایش اتاق سرور",
  reports: "گزارشات",
  "users-management": "مدیریت کاربران",
  tutorials: "آموزش‌ ها",
  support: "پشتیبانی",
  "content-management": "مدیریت محتوا",
};

function isDynamicParam(value: string) {
  return !(value in pathMap);
}

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const hasIdAtEnd =
    pathnames.length > 0 && isDynamicParam(pathnames[pathnames.length - 1]);

  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} underline="hover" color="inherit" to="/">
        داشبورد
      </Link>
      {pathnames.map((path, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label = pathMap[path];
        const isIdParam = Number(path);

        if (path === "dashboard") return null;

        if (isIdParam || !label) return null;

        const isBeforeId = hasIdAtEnd && index === pathnames.length - 2;

        return isLast || isBeforeId ? (
          <Typography variant="body2" key={index}>
            {label}
          </Typography>
        ) : (
          <Link component={RouterLink} variant="body2" key={index} to={to}>
            {label}
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
