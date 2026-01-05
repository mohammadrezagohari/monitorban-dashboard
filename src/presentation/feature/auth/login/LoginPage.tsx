// src/pages/LoginPage.tsx
import React from "react";

import { LoginLayout } from "./LoginPage.style";
import LoginFormContainer from "@/presentation/feature/auth/login/components/LoginFormContainer";
import LoginImageContainer from "@/presentation/feature/auth/login/components/LoginImageContainer";

function LoginPage() {
  return (
    <LoginLayout>
      <LoginFormContainer />
      <LoginImageContainer />
    </LoginLayout>
  );
}

export default LoginPage;
