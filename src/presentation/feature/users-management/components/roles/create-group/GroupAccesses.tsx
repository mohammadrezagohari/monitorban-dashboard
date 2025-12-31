import IconButton from "src/presentation/components/common/icon-button/IconButton";
import { Icon } from "src/presentation/components/common/icons/components/Icon";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Tag from "src/presentation/components/common/tag/Tag";

function GroupAccesses({ accesses, deleteAccess }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی های گروه</SectionTitle>
        {isDesktop ? (
          <Button variant="outlined" size="small" colorType="primary">
            افزودن دسترسی
          </Button>
        ) : (
          <IconButton iconName="plus" variant="outlined" />
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body2" color="neutral.200">
              در حال حاضر هیچ دسترسی اضافه نشده است !
            </Typography>
          </Box>
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outlined" size="small" colorType="secondary">
            افزودن دسترسی
          </Button>
        </Box>
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupAccesses;
