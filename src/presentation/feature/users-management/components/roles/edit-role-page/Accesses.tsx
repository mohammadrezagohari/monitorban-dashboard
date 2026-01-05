import { useNavigate } from "react-router-dom";
import Button from "@/presentation/components/common/buttons/Button";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Tag from "@/presentation/components/common/tag/Tag";
import { AccessesMainContainer } from "./EditRolePage.styles";

function Accesses({ accesses, onClick }) {
  const navigate = useNavigate();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی ها</SectionTitle>
        <Button
          variant="outlined"
          size="small"
          colorType="primary"
          type="button"
          onClick={() => {
            console.log("Navigating to add new access");
            navigate("add-new-access");
          }}
        >
          افزودن دسترسی
        </Button>
      </HeaderContainer>
      <AccessesMainContainer>
        {accesses.map((item, index) => (
          <Tag key={index}>
            <Icon name="close" onClick={() => onClick(item)} w={20} h={20} />
            {item}
          </Tag>
        ))}
      </AccessesMainContainer>
    </SectionContainer>
  );
}

export default Accesses;
