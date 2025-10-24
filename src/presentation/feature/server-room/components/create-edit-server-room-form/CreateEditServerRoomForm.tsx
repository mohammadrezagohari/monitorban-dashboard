import { useMediaQuery, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import Input from "src/presentation/components/common/input/Input";
import Button from "src/presentation/components/common/buttons/Button";
import FormRow from "src/presentation/components/common/input/FormRow";
import { Form } from "src/presentation/components/common/Form";
import TreeView from "src/presentation/components/common/tree-view/TreeView";
import FileUpload from "src/presentation/components/common/file-upload/FileUpload";
import { GridBox } from "src/presentation/components/common/GridBox";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { StyledServerRoomContainer } from "./CreateEditServerRoomForm.styles";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";

function CreateEditServerRoom({ roomToEdit = {} }) {
  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, control } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <StyledServerRoomContainer>
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>اطلاعات اتاق سرور</SectionTitle>
          </HeaderContainer>
          <MainContainer>
            <Form>
              <GridBox>
                <FormRow label="نام اتاق سرور">
                  <Input
                    id="title"
                    placeholder="نام اتاق سرور را وارد کنید"
                    {...register("title")}
                  />
                </FormRow>

                <FormRow label="شهر">
                  <Input
                    id="city"
                    placeholder="شهر را وارد کنید"
                    {...register("city")}
                  />
                </FormRow>

                <FormRow label="تعداد اتاق">
                  <Input
                    id="room"
                    placeholder="تعداد اتاق را وارد کنید"
                    {...register("room")}
                  />
                </FormRow>

                <FormRow label="تعداد رک">
                  <Input
                    id="rack"
                    placeholder="تعداد رک را وارد کنید"
                    {...register("rack")}
                  />
                </FormRow>

                <FormRow label="آیکون">
                  <Controller
                    name="image"
                    control={control}
                    render={({ field: { value, onChange, ...field } }) => (
                      <FileUpload
                        onFileSelect={onChange}
                        label="عکس پروفایل"
                        initialImage={value}
                        accept=".jpg,.jpeg,.png"
                      />
                    )}
                  />
                </FormRow>
              </GridBox>
            </Form>
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>انتخاب سنسورها</SectionTitle>

            {isDesktop && (
              <Button variant="outlined" size="small" colorType="primary">
                افزودن سنسور جدید
              </Button>
            )}
          </HeaderContainer>

          <MainContainer>
            <TreeView />
          </MainContainer>
        </SectionContainer>
      </StyledServerRoomContainer>
    </>
  );
}

export default CreateEditServerRoom;
