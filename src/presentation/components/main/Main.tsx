import { ReactNode } from "react";
import { StyledMain } from "./Main.style";

function Main({ children }: { children: ReactNode }) {
  return <StyledMain component="main">{children}</StyledMain>;
}

export default Main;
