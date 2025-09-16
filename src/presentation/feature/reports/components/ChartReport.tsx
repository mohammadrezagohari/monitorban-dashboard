import { Box, Typography } from "@mui/material";
import LineChart from "./LineChart";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";

function ChartReport() {
  return (
    <Box>
      <Typography variant="h3" color="white" mb={3}>
        گزارش نموداری
      </Typography>
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>گراف روزانه</SectionTitle>
        </HeaderContainer>

        <LineChart />
      </SectionContainer>
    </Box>
  );
}

export default ChartReport;
