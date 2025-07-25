import { Avatar, Box, IconButton, Typography } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import FormRow from "src/presentation/components/common/input/FormRow";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { StyledInput } from "src/presentation/components/common/input/Form.styles";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { UserInfoMainContainer } from "./UserPage.styles";
import {
  HeaderContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

function UserInfo({ activedUser }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات کاربر</SectionTitle>
      </HeaderContainer>
      <UserInfoMainContainer
      >
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
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
              <IconButton
                sx={{
                  border: "1px solid #E8383B",
                  borderRadius: "10px",
                  p: "7px",
                }}
              >
                <DeleteIcon size={16} color="#E8383B" />
              </IconButton>
            </Box>
          </Box>
        </FormRow>
      </UserInfoMainContainer>
    </SectionContainer>
  );
}

export default UserInfo;
