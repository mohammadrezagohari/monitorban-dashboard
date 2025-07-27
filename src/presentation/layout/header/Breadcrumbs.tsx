import { Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { StyledBreadcrumbs } from "./Header.styles";

const pathMap: Record<string, string> = {
  dashboard: "",
  sensors: "سنسورها",
  "server-room": "اتاق سرور",
  reports: "گزارشات",
  "users-management": "مدیریت کاربران",
  tutorials: "آموزش‌ ها",
  support: "پشتیبانی",
  "content-management": "مدیریت محتوا",
  "add-new-sensor": "افزودن سنسور جدید",
  "city-sensors-info": "اطلاعات سنسور ها",
};

function Breadcrumbs() {
 const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} underline="hover" color="inherit" to="/">
        داشبورد
      </Link>
      {pathnames.map((path, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label = pathMap[path];
        //|| decodeURIComponent(path);

        return isLast ? (
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
