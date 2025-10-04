import { Box, Typography } from "@mui/material";
import { TextContainer } from "./TextReport.styles";

const TEXT =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،  ";

function TextReport({ data = TEXT }) {
  return (
    <Box>
      <Typography variant="h3" color="white" mb={3}>
        گزارش متنی
      </Typography>

      <TextContainer>
        <Typography color="neutral.100" variant="body1">
          {data}
        </Typography>
      </TextContainer>
    </Box>
  );
}

export default TextReport;
