import { useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import Button from "src/presentation/components/common/buttons/Button";
import FormRow from "src/presentation/components/common/input/FormRow";
import Input from "src/presentation/components/common/input/Input";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import Select from "src/presentation/components/common/select/Select";
import { serverRoomOptions } from "src/presentation/data/data";
import {
  StyledReportsForm as Form,
  InputsContainer,
} from "./ReportForm.styles";

function ReportsForm() {
  const { control, handleSubmit, register, reset } = useForm();
  const theme = useTheme();

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <SectionContainer>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputsContainer>
          <FormRow label="انتخاب اتاق سرور">
            <Controller
              name="serverRoom"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  id="serverRoom"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  options={serverRoomOptions}
                />
              )}
            />
          </FormRow>

          <FormRow label="انتخاب سنسور">
            <Controller
              name="sensor"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  id="sensor"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  options={serverRoomOptions}
                />
              )}
            />
          </FormRow>

          <FormRow label="بازه ی زمانی">
            <Input id="period" icon="calendar" {...register("period")} />
          </FormRow>
        </InputsContainer>

        <Button
          variant="contained"
          size="large"
          colorType="primary"
          type="submit"
        >
          انتخاب
        </Button>
      </Form>
    </SectionContainer>
  );
}

export default ReportsForm;
