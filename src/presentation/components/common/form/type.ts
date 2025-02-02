import { SubmitHandler } from "react-hook-form";
import { IFormValues } from "./IFormValues";

export interface IBaseFormProps {
  onSubmit: SubmitHandler<IFormValues>;
  defaultValues?: IFormValues;
  children: React.ReactNode;
}