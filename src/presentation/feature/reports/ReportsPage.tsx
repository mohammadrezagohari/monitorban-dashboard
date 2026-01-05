import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import ChartReport from "./components/ChartReport";
import DetailedReport from "./components/DetailedReport";
import ReportsForm from "./components/ReportsForm";
import TextReport from "./components/TextReport";
import { StyledReportsContainer } from "./ReportsPage.styles";

function ReportsPage() {
  return (
    <>
      <PageTitle title="گزارشات" />

      <StyledReportsContainer>
        <ReportsForm />

        <TextReport />

        <ChartReport />

        <DetailedReport />
      </StyledReportsContainer>
    </>
  );
}

export default ReportsPage;
