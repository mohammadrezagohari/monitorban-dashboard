import { Controller, useForm } from "react-hook-form";
import { useMediaQuery, useTheme } from "@mui/material";

import Input from "@/presentation/components/common/input/Input";
import Select from "@/presentation/components/common/select/Select";
import Button from "@/presentation/components/common/buttons/Button";
import FormRow from "@/presentation/components/common/input/FormRow";
import { Form } from "@/presentation/components/common/Form";
import { GridBox } from "@/presentation/components/common/GridBox";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { TextField } from "@/presentation/components/common/input/TextField";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { ButtonBox, StyledMessageBox } from "./FAQ.styles";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";

const ticketOptions = [
  { id: 1, value: "user1", label: "کاربر 1" },
  { id: 2, value: "user2", label: "کاربر 2" },
  { id: 3, value: "user3", label: "کاربر 3" },
];

function TicketForm() {
  const { control, handleSubmit, register } = useForm();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const ticketSubmitHandler = (data) => {
    console.log("Ticket submitted:", data);
  };

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>ارسال تیکت</SectionTitle>
      </HeaderContainer>
      <MainContainer>
        <Form onSubmit={handleSubmit(ticketSubmitHandler)}>
          <GridBox>
            <FormRow label="موضوع تیکت">
              <Input
                id="ticket-subject"
                placeholder="موضوع تیکت"
                {...register("ticket-subject")}
              />
            </FormRow>

            <FormRow label="گیرنده">
              <Controller
                name="ticket-recipient"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    id="ticket-recipient"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    options={ticketOptions}
                    // {...register("ticket-recipient")}
                  />
                )}
              />
            </FormRow>
            <StyledMessageBox>
              <FormRow label="متن پیام">
                <TextField
                  id="ticket-message"
                  multiline
                  rows={4}
                  placeholder="متن پیام خود را وارد کنید"
                  {...register("ticket-message")}
                />
              </FormRow>
            </StyledMessageBox>
            <ButtonBox>
              <Button
                variant="contained"
                size={isDesktop ? "small" : "xxsmall"}
                colorType="primary"
                type="submit"
              >
                ارسال
              </Button>
            </ButtonBox>
          </GridBox>
        </Form>
      </MainContainer>
    </SectionContainer>
  );
}

export default TicketForm;
