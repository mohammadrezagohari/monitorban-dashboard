import { Box } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import useUser from "./useUser";
import UserForm from "./UserForm";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import useUserForm from "./useUserForm";
import { useNavigate, useParams } from "react-router-dom";
import { FormProvider } from "react-hook-form";
import { ButtonsContainer } from "./UserPage.styles";
import { useEditUser } from "./useEditUser";
import { useMoveBack } from "src/presentation/hooks/useMoveBack";

export default function UserPage() {
  const { userId } = useParams();

  if (!userId) throw new Error("User ID is required");
  const { isLoading: userLoading, userData, isError } = useUser(userId);

  const { editUser, isPending } = useEditUser();

  const methods = useUserForm(userData);
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  const handleChange = (data) => {
    console.log(data);
    editUser(
      { id: userId, updateObj: data },
      {
        onSuccess: () => {
          console.log("User updated successfully");
          moveBack();
        },
        // onError: (error) => {
        //   console.error("Error updating user:", error);
        // },
      }
    );
  };

  if (userLoading) {
    return null;
  }

  if (isError) {
    return (
      <Box sx={{ color: "red", fontSize: 48 }}>Error loading user data</Box>
    );
  }

  return (
    <FormProvider {...methods}>
      <PageTitle title="صفحه کاربر">
        <ButtonsContainer>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            onClick={moveBack}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            size="small"
            colorType="primary"
            type="submit"
            onClick={methods.handleSubmit(handleChange)}
          >
            ذخیره تغییرات
          </Button>
        </ButtonsContainer>
      </PageTitle>

      <UserForm />
      {/* 
      <StyledUserPageContainer>
        <UserInfo2 />

        <SecurityInfo />
        
        <UserRoles />
        
        <UserGroups /> 

        <UserAccessibility />
      </StyledUserPageContainer>
        */}
    </FormProvider>
  );
}

// function UserForm({ user }: UserFormProps) {
