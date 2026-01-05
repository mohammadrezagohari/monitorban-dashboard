import { useTheme } from "@mui/material";
import { Icon } from "../icons/components/Icon";
import { LogoContainer } from "./Logo.style";

function LogoMini() {
  const theme = useTheme();
  return (
    <LogoContainer>
      <Icon
        name="logoShape"
        w={30}
        h={25}
        // @ts-ignore
        color={theme.palette.primary[300]}
      />
      <Icon name="logoText" w={68} h={20} />
    </LogoContainer>
  );
}

export default LogoMini;
