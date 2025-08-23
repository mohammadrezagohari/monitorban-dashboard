import Checkbox from "src/presentation/components/common/checkbox-input/Checkbox";
import React from "react";
import CustomCheckbox from "src/presentation/components/common/checkbox-input/CustomCheckBoxInput";
import LabeledCheckbox from "src/presentation/components/common/checkbox-input/LabeledCheckbox";
import { Controller, useForm } from "react-hook-form";
import Checkbox2 from "src/presentation/components/common/checkbox-input/Checkbox copy";

type FormValues = {
  skills: string[];
};

const options = [
  { value: "value1", label: "بیمارستان زارع" },
  { value: "value2", label: "بیمارستان بوعلی" },
  { value: "value3", label: "دانشگاه علوم پزشکی" },
  { value: "value4", label: "بیمارستان امام" },
];

export const RegisterPage = () => {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: { skills: [] },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      style={{ padding: "32px", backgroundColor: "#333" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <div>
        <Checkbox {...register("checkbox1")} />
        <Controller
          name="checkbox1-2"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              value={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      </div>
      <div>
        <CustomCheckbox {...register("checkbox2")} />
      </div>
      <div>
        <LabeledCheckbox
          label="Accept Terms and Conditions"
          {...register("checkbox3")}
        />
      </div> */}
      <Checkbox2 name="skills" control={control} options={options} />
      
      <button type="submit">Register</button>
    </form>
  );
};
