import { Link, Typography } from "@mui/material";
import { StyledBreadcrumbs } from "./BaseBreadcrumb.styles";
import { BaseBreadcrumbProps } from "./IBaseBreadcrumb";

const BaseBreadCrumb: React.FC<BaseBreadcrumbProps> = ({ paths }) => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      {paths.map((item, index) => {
        const isLast = index === paths.length - 1;

        return isLast ? (
          <Typography variant="body2" key={index}>
            {item.label}
          </Typography>
        ) : (
          <Link variant="body2" key={index} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default BaseBreadCrumb;
