import Button from "@/presentation/components/common/buttons/Button";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import GroupsList from "./GroupsList";

function GroupsPage() {
  const { isMediumScreen } = useScreenSize();

  return (
    <>
      <PageTitle title="گروه ها">
        {isMediumScreen ? (
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
