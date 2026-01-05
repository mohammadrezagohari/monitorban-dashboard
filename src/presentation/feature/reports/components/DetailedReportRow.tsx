import { Typography } from "@mui/material";
import Table from "@/presentation/components/common/table/Table";

function DetailedReportRow({ data }) {
  const { id: reportId, date, time, device, sensorName, value, unit } = data;

  return (
    <Table.Row>
      <Typography>{reportId}</Typography>
      <Typography>{date}</Typography>
      <Typography>{time}</Typography>
      <Typography>{device}</Typography>
      <Typography>{sensorName}</Typography>
      <Typography>{value}</Typography>
      <Typography>{unit}</Typography>
    </Table.Row>
  );
}

export default DetailedReportRow;
