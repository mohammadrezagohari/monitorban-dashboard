import { Link } from "react-router-dom";

import { LogoIcon } from "src/presentation/assets/icons/LogoIcon";
import { LogoText } from "src/presentation/assets/icons/LogoText";
import { LogoContainer } from "./Logo.style";

function Logo() {
  return (
    <LogoContainer>
      <Link to="dashboard">
        <LogoIcon />
        <LogoText />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
