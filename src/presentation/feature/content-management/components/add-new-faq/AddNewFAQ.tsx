import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

import Input from "src/presentation/components/common/input/Input";
import Button from "src/presentation/components/common/buttons/Button";
import FormRow from "src/presentation/components/common/input/FormRow";
import { Form } from "src/presentation/components/common/Form";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { TextField } from "src/presentation/components/common/input/TextField";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { ButtonContainer } from "./AddNewFAQ.styles";

function AddNewFAQ({ faqToEdite = {} }) {
  const { handleSubmit, register, reset } = useForm();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleAddFAQ(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <PageTitle title="پرسش های متداول" />

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>افزودن پرسش جدید</SectionTitle>
        </HeaderContainer>

        <MainContainer>
          <Form
            onSubmit={handleSubmit(handleAddFAQ)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <FormRow label="پرسش">
              <Input
                id="question"
                placeholder="متن پرسش را وارد کنید"
                {...register("question")}
              />
            </FormRow>

            <FormRow label="پاسخ دادن">
              {/* <textarea></textarea> */}
              <TextField
                id="answer"
                multiline
                rows={3.5}
                placeholder="متن پاسخ را وارد کنید"
                {...register("answer")}
              />
            </FormRow>

            <ButtonContainer>
              <Button
                variant="contained"
                size={isDesktop ? "small" : "xxsmall"}
                colorType="primary"
                type="submit"
              >
                ذخیره
              </Button>
            </ButtonContainer>
          </Form>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default AddNewFAQ;
