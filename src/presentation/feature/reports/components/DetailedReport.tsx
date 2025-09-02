import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { Box, Typography } from "@mui/material";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Button from "src/presentation/components/common/buttons/Button";
import { ExcelIcon } from "src/presentation/assets/icons/ExcelIcon";
import { PrinterIcon } from "src/presentation/assets/icons/PrinterIcon";
import Table from "src/presentation/components/common/table/Table";
import { detailedReportsData } from "src/presentation/data/data";
import DetailedReportRow from "./DetailedReportRow";
import { ButtonsContainer } from "./DetailedReport.styles";

function DetailedReport() {
  return (
    <Box>
      <HeaderContainer>
        <SectionTitle>ریز گزارش</SectionTitle>
        <ButtonsContainer>
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            startIcon={<ExcelIcon size={24} />}
          >
            خروجی گرفتن
          </Button>
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            startIcon={<PrinterIcon size={24} />}
          >
            پرینت
          </Button>
        </ButtonsContainer>
      </HeaderContainer>
      {/* <Table columns="1fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr"> */}
      <Table columns="1fr repeat(6, 1.3fr)">
        <Table.Header>
          <Typography>ردیف</Typography>
          <Typography>تاریخ</Typography>
          <Typography>ساعت</Typography>
          <Typography>دستگاه</Typography>
          <Typography>نام سنسور</Typography>
          <Typography>مقدار</Typography>
          <Typography>واحد</Typography>
        </Table.Header>

        <Table.Body
          data={detailedReportsData}
          render={(data) => <DetailedReportRow data={data} key={data.id} />}
        />
      </Table>
    </Box>
  );
}

export default DetailedReport;
