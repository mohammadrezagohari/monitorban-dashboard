import { Link } from "react-router-dom";

import { LogoIcon } from "src/presentation/assets/icons/LogoIcon";
import { LogoText } from "src/presentation/assets/icons/LogoText";
import { LogoContainer } from "./Logo.style";

function LogoMini() {
  return (
    <LogoContainer>
      <Link to="dashboard">
        <LogoIcon size={30} />
        <LogoText size={68} />
      </Link>
    </LogoContainer>
  );
}

export default LogoMini;
