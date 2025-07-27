import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
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
            size="small"
            colorType="primary"
            startIcon={<PlusIcon size={24} />}
          >
            ایجاد گروه جدید
          </Button>
        ) : (
          <IconButton
            sx={{
              bgcolor: theme.palette.primary.main,
              borderRadius: "10px",
            }}
          >
            <PlusIcon size={16} />
          </IconButton>
        )}
      </PageTitle>

      <GroupsList />
    </>
  );
}

export default GroupsPage;
