import { useTheme } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import FileUpload from "src/presentation/components/common/file-upload/FileUpload";
import { StyledInput } from "src/presentation/components/common/input/Form.styles";
import FormRow from "src/presentation/components/common/input/FormRow";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { UserInfoMainContainer } from "./UserPage.styles";

function UserInfo() {
  // { user }
  const theme = useTheme();
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات کاربر</SectionTitle>
      </HeaderContainer>
      <UserInfoMainContainer>
        <FormRow label="نام کاربر">
          <StyledInput
            id="username"
            type="text"
            placeholder="نام کاربر را وارد کنید"
          />
        </FormRow>
        <FormRow label="شماره تماس">
          <StyledInput
            id="phone"
            type="number"
            placeholder="شماره تماس را وارد کنید"
          />
        </FormRow>

        <FormRow label="پروفایل">
          {/* <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                width: 90,
              }}
            >
              <Avatar src={activedUser.image} />
              <Typography variant="body2" color="neutral.200">
                عکس پروفایل
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button variant="outlined" size="xxsmall" colorType="primary">
                بارگذاری عکس
              </Button>
              <IconButtonWithBorder
                iconColor={theme.palette.error.main}
                // sx={{
                //   border: "1px solid #E8383B",
                //   borderRadius: "10px",
                //   p: "7px",
                // }}
              >
                <DeleteIcon size={16} />
              </IconButtonWithBorder>
            </Box>
          </Box> */}
          <Controller
            name="user-image"
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <FileUpload onFileSelect={onChange} label="عکس پروفایل" />
            )}
          />
        </FormRow>
      </UserInfoMainContainer>
    </SectionContainer>
  );
}

export default UserInfo;
