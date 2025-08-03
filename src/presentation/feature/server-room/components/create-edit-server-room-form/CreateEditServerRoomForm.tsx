import { useForm } from "react-hook-form";
import { Typography, useTheme } from "@mui/material";

import Input from "src/presentation/components/common/input/Input";
import Button from "src/presentation/components/common/buttons/Button";
import FormRow from "src/presentation/components/common/input/FormRow";
import { Form } from "src/presentation/components/common/Form";
import TreeView from "src/presentation/components/common/old/TreeView/TreeView";
import { GridBox } from "src/presentation/components/common/GridBox";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { HouseIcon } from "src/presentation/assets/icons/HouseIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import {
  ButtonsContainer,
  IconContainer,
  StyledIconButton,
  StyledImageInputContainer,
  StyledServerRoomContainer,
} from "./CreateEditServerRoomForm.styles";

function CreateEditServerRoom({ roomToEdit = {} }) {
  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  console.log("roomToEdit:: ", roomToEdit);

  const theme = useTheme();

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
                  <StyledImageInputContainer>
                    <IconContainer>
                      <IconWrapper>
                        <HouseIcon color={theme.palette.primary[200]} />
                      </IconWrapper>
                      <Typography variant="body2" color="neutral.200">
                        عکس آیکون
                      </Typography>
                    </IconContainer>
                    <ButtonsContainer>
                      <Button
                        variant="outlined"
                        size="xxsmall"
                        colorType="primary"
                      >
                        بارگذاری عکس
                      </Button>
                      <StyledIconButton>
                        <DeleteIcon size={16} />
                      </StyledIconButton>
                    </ButtonsContainer>
                  </StyledImageInputContainer>
                </FormRow>
              </GridBox>
            </Form>
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>انتخاب سنسورها</SectionTitle>

            <Button variant="outlined" size="small" colorType="primary">
              افزودن سنسور جدید
            </Button>
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
