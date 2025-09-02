import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { useMediaQuery, useTheme } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import GroupsList from "./GroupsList";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

function GroupsPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <PageTitle title="گروه ها">
        {isDesktop ? (
          <Button
            variant="contained"
            size="small"
            colorType="primary"
            startIcon={<PlusIcon size={24} />}
          >
            ایجاد گروه جدید
          </Button>
        ) : (
          <IconButtonWithBorder
            bgColor={theme.palette.primary.main}
            color={theme.palette.neutral.main}
            type="contained"
            // sx={{
            //   borderRadius: "10px",
            // }}
          >
            <PlusIcon size={16} />
          </IconButtonWithBorder>
        )}
      </PageTitle>

      <GroupsList />
    </>
  );
}

export default GroupsPage;
