import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import Button from "src/presentation/components/common/buttons/Button";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Tag from "src/presentation/components/common/tag/Tag";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";

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
          <IconButton
            sx={{
              border: `1px solid ${theme.palette.primary.dark}`,
              borderRadius: "10px",
              color: theme.palette.primary.dark,
              p: "7px",
            }}
          >
            <PlusIcon size={16} />
          </IconButton>
        )}
      </HeaderContainer>
      <MainContainer sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {accesses.length > 0 ? (
          accesses.map((access, index) => (
            <Tag key={index}>
              <IconButton
                sx={{ p: 0, color: "inherit" }}
                onClick={() => deleteAccess(access)}
              >
                <CloseIcon size={20} />
              </IconButton>
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
