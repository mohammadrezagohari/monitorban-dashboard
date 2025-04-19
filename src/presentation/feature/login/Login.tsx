import { LogoIcon } from "src/presentation/components/common/icons/LogoIcon";
import { LogoText } from "src/presentation/components/common/icons/LogoText";
import { Box, FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BaseInput from "../input/BaseInput";
import ButtonPrimaryLargeFilled from "../buttons/ButtonPrimaryLargeFilled";

const LoginPage = () => {
  function onSubmit(event: any) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <Grid
      container
      height={{ xs: "100vh", sm: "auto", lg: "100vh" }}
      sx={{
        // minHeight: "100vh",
        bgcolor: "#0E0C15",
      }}
    >
      <Grid
        color="neutral.main"
        size={{ xs: 12, sm: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box>
            <LogoIcon size={31} />
            <LogoText size={69} />
          </Box>
          <Box>
            <Typography fontSize={32} fontWeight={700}>
              خوش آمدید
            </Typography>
            <Typography
              fontFamily="Dana-ExtraLight"
              fontSize={20}
              fontWeight={200}
            >
              ورود به سامانه مونیتورینگ اتاق سرور
            </Typography>
          </Box>
          <FormControl component="form" onSubmit={(e) => onSubmit(e)}>
            <BaseInput
              label="برای شروع شماره موبایلت رو وارد کن"
              placeholder="مثال : 09353500145"
            />
            {/* <ButtonCustom variant="contained">مرحله بعد - وارد کردن کد</ButtonCustom> */}
            <ButtonPrimaryLargeFilled type="submit">
              مرحله بعد - وارد کردن کد
            </ButtonPrimaryLargeFilled>
          </FormControl>
        </Box>
      </Grid>
      <Grid
        color="neutral.main"
        size={{ xs: 0, sm: 6 }}
        display={{ xs: "none", sm: "block" }}
        sx={{
          width: "100%",
          height: "100%",
          padding: "1.5rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "#1D182E",
            height: "100%",
            borderRadius: "1.5rem",
          }}
        >
          <img
            style={{ inlineSize: "100%" }}
            alt="login to monitorban"
            src="./assets/svg/login-page.svg"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
