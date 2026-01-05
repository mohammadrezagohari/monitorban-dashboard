import { Box, Typography } from "@mui/material";

import Button from "@/presentation/components/common/buttons/Button";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Table from "@/presentation/components/common/table/Table";
import { detailedReportsData } from "@/presentation/data/data";
import { ButtonsContainer } from "./DetailedReport.styles";
import DetailedReportRow from "./DetailedReportRow";

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
            rightIcon="excel"
          >
            خروجی گرفتن
          </Button>
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            rightIcon="print"
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
