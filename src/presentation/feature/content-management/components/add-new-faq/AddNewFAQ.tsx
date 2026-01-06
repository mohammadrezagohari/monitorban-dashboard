import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

import Button from "@/presentation/components/common/buttons/Button";
import FormRow from "@/presentation/components/common/input/FormRow";
import Input from "@/presentation/components/common/input/Input";
import { TextField } from "@/presentation/components/common/input/TextField";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { AddNewFAQForm, ButtonContainer } from "./AddNewFAQ.styles";
import { FAQProps } from "./IAddNewFAQ";

function AddNewFAQ({ faqToEdite = {} }) {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      question: "",
      answer: "",
    },
  });
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  function handleAddFAQ(data: FAQProps) {
    if (!data.question || !data.answer) {
      console.log("Incomplete FAQ data");
      return;
    }

    console.log({ id: Math.random().toString(36).substr(2, 9), ...data });
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
          <AddNewFAQForm onSubmit={handleSubmit(handleAddFAQ)}>
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
                size={isMediumScreen ? "small" : "xxsmall"}
                colorType="primary"
                type="submit"
              >
                ذخیره
              </Button>
            </ButtonContainer>
          </AddNewFAQForm>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default AddNewFAQ;
