import IconButton from "src/presentation/components/common/icon-button/IconButton";
import { useMediaQuery, useTheme } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import GroupsList from "./GroupsList";

function GroupsPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <PageTitle title="گروه ها">
        {isDesktop ? (
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            rightIcon="plus"
          >
            ایجاد گروه جدید
          </Button>
        ) : (
          <IconButton iconName="plus" />
        )}
      </PageTitle>

      <GroupsList />
    </>
  );
}

export default GroupsPage;
