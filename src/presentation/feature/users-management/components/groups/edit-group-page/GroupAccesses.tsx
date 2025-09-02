import { Box, IconButton } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledAccessesMainContainer } from "./EditGroupPage.styles";
import EmptyData from "src/presentation/components/common/empty-data/EmptyData";

function GroupAccesses({ accesses }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>دسترسی های گروه</SectionTitle>
        <Button variant="outlined" size="small" colorType="primary">
          افزودن دسترسی
        </Button>
      </HeaderContainer>
      <MainContainer>
        {accesses.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {accesses.map((access) => (
              <Tag>
                <IconButton
                  sx={{ p: 0, color: "inherit" }}
                  //   onClick={() => onClick(item)}
                >
                  <CloseIcon size={20} />
                </IconButton>
                {access}
              </Tag>
            ))}
          </Box>
        ) : (
          <EmptyData label="دسترسی" />
        )}
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupAccesses;
