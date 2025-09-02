import { navItems } from "src/presentation/data/data";
import BaseMenuItem from "src/presentation/components/menu/BaseMenuItem";
import { StyledList } from "./MainNav.styles";

function MainNav() {
  return (
    <StyledList>
      {navItems &&
        navItems.map((item, index) => <BaseMenuItem key={index} item={item} />)}
    </StyledList>
  );
}

export default MainNav;
