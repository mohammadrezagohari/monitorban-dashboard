import { IconButton } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { AccessesMainContainer } from "./EditRolePage.styles";

function Accesses({ accesses, onClick }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی ها</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن دسترسی
        </Button>
      </HeaderContainer>
      <AccessesMainContainer>
        {accesses.map((item, index) => (
          <Tag key={index}>
            <IconButton
              sx={{ p: 0, color: "inherit" }}
              onClick={() => onClick(item)}
            >
              <CloseIcon size={20} />
            </IconButton>
            {item}
          </Tag>
        ))}
      </AccessesMainContainer>
    </SectionContainer>
  );
}

export default Accesses;
