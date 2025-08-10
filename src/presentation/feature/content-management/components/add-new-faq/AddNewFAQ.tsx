import FormRow from "src/presentation/components/common/input/FormRow";
import { Form } from "src/presentation/components/common/Form";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Input from "src/presentation/components/common/input/Input";
import Button from "src/presentation/components/common/buttons/Button";
import { TextField } from "src/presentation/components/common/input/TextField";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

function AddNewFAQ() {
  const { handleSubmit, register, reset } = useForm();

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

            <Box sx={{ "& *": { justifySelf: "flex-end" } }}>
              <Button
                variant="contained"
                size="small"
                colorType="primary"
                type="submit"
              >
                ذخیره
              </Button>
            </Box>
          </Form>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default AddNewFAQ;
