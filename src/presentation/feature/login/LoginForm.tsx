import { FormControl } from "@mui/material";
import BaseInput from "../input/BaseInput";
import ButtonPrimaryLargeFilled from "../buttons/ButtonPrimaryLargeFilled";

const LoginForm = ({ onSubmit }) => {
  return (
    <FormControl component="form" onSubmit={onSubmit}>
      <BaseInput
        label="برای شروع شماره موبایلت رو وارد کن"
        placeholder="مثال : 09353500145"
      />
      {/* <ButtonCustom variant="contained">مرحله بعد - وارد کردن کد</ButtonCustom> */}
      <ButtonPrimaryLargeFilled type="submit">
        مرحله بعد - وارد کردن کد
      </ButtonPrimaryLargeFilled>
    </FormControl>
  );
};

export default LoginForm;
