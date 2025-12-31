import { Link } from "react-router-dom";

import { Icon } from "../icons/components/Icon";
import { LogoContainer } from "./Logo.style";

function LogoMini() {
  return (
    <LogoContainer>
      <Link to="dashboard">
        <Icon name="logoShape" w={30} h={25} />
        <Icon name="logoText" w={68} h={20} />
      </Link>
    </LogoContainer>
  );
}

export default LogoMini;
