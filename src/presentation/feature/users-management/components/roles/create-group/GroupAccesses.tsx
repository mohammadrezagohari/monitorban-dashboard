import Button from "@/presentation/components/common/buttons/Button";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Tag from "@/presentation/components/common/tag/Tag";
import useScreenSize from "@/presentation/hooks/useScreenSize";

function GroupAccesses({ accesses, deleteAccess }) {
  const { isMediumScreen } = useScreenSize();

  const handleAddAccess = () => {
    console.log("Add access");
  };

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی های گروه</SectionTitle>
        {isMediumScreen ? (
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            onClick={handleAddAccess}
          >
            افزودن دسترسی
          </Button>
        ) : (
          <IconButton
            iconName="plus"
            variant="outlined"
            onClick={handleAddAccess}
          />
        )}
      </HeaderContainer>
      <MainContainer sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {accesses.length > 0 ? (
          accesses.map((access, index) => (
            <Tag key={index}>
              <Icon name="close" w={20} h={20} />
              {access}
            </Tag>
          ))
        ) : (
          <EmptyData label="دسترسی" handleClick={handleAddAccess} />
        )}
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupAccesses;
