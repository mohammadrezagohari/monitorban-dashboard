import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import {
  Box,
  IconButton,
  Tabs as MuiTabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import TabPanel from "./TabPanel";
import ListCard from "../list-card/ListCard";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { usersInfo } from "src/presentation/data/data";
import { UsersIcon } from "src/presentation/assets/icons/UsersIcon";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "../section-container/SectionContainer";
import { MainContainer } from "../section-container/SectionContainer.styles";
import { IconButtonWithBorder } from "../IconButtonWithBorder";
import Checkbox from "../checkbox/Checkbox";
import { StyledControledCheckbox } from "../checkbox/Checkbox.styles";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const ROLE = "مدیر IT";

function Tabs() {
  const [value, setValue] = useState(0);
  const [isSelectable, setIsSelectable] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  function handleChange(event: SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  function createGroup() {
    console.log("Create Group");
    setIsSelectable(true);
  }

  function handleClose() {
    setIsSelectable(false);
  }

  function handleCreateGroup() {
    console.log("Create Group is finished");
    // navigate("create-group");
  }

  return (
    <>
      <SectionContainer>
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <MuiTabs
            id="MuiTabs"
            value={value}
            slotProps={{
              indicator: {
                sx: {
                  height: "1px",
                },
              },
            }}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-list": {
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderBottom: `1px solid ${theme.palette.neutral[300]}`,
              },
            }}
          >
            <Tab
              label="همه کاربران"
              {...a11yProps(0)}
              sx={{
                typography: { xs: "body2", md: "body1" },
                color: "neutral.300",
                padding: "8px 0",
                minWidth: "auto",
              }}
            />
            <Tab
              label="کاربران دارای نقش"
              {...a11yProps(1)}
              sx={{
                typography: { xs: "body2", md: "body1" },
                color: "neutral.300",
                padding: "8px 0",
                minWidth: "auto",
              }}
            />
          </MuiTabs>
          {value > 0 &&
            (isDesktop ? (
              <Button
                variant="outlined"
                size="small"
                colorType="primary"
                onClick={createGroup}
              >
                ساخت گروه
              </Button>
            ) : (
              <IconButtonWithBorder
                // sx={{
                //   border: `1px solid ${theme.palette.primary.dark}`,
                //   borderRadius: "10px",
                //   color: theme.palette.primary.dark,
                //   padding: "7px",
                // }}
                onClick={createGroup}
              >
                <UsersIcon size={16} />
              </IconButtonWithBorder>
            ))}
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {usersInfo.map((user, index) => {
              const isIncluded = user.roles.includes(ROLE);

              return (
                <ListCard columns="2fr 1fr 3fr 1fr" item={user} key={index}>
                  <ListCard.Title />

                  <ListCard.FirstDetail label="نقش" />
                  <ListCard.SecondDetail label="گروه" />

                  <ListCard.Operations>
                    {isIncluded ? (
                      <Button variant="text" size="small" colorType="primary">
                        دارای این نقش
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        size="small"
                        colorType="success"
                      >
                        افزودن به نقش
                      </Button>
                    )}
                    <Button variant="outlined" size="small" colorType="primary">
                      مشاهده
                    </Button>
                  </ListCard.Operations>
                </ListCard>
                // <RoleUserCard
                //   user={user}
                //   ROLE={ROLE}
                //   type="all"
                //   key={index}
                //   selectable={false}
                // />
              );
            })}
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {usersInfo
              .filter((user) => user.roles.includes(ROLE))
              .map((user, index) => (
                <ListCard
                  columns="2fr 1fr 3fr 1fr"
                  item={user}
                  key={index}
                  selectable={isSelectable}
                >
                  <ListCard.Title />

                  <ListCard.FirstDetail label="نقش" />
                  <ListCard.SecondDetail label="گروه" />

                  <ListCard.Operations>
                    <Button variant="outlined" size="small" colorType="error">
                      حذف
                    </Button>
                    <Button variant="outlined" size="small" colorType="primary">
                      مشاهده
                    </Button>
                  </ListCard.Operations>
                </ListCard>

                // <RoleUserCard
                //   user={user}
                //   ROLE={ROLE}
                //   type="assigned"
                //   selectable={isSelectable}
                //   key={index}
                // />
              ))}
          </Box>
        </TabPanel>
      </SectionContainer>
      {isSelectable && (
        <SectionContainer sx={{ borderRadius: "15px !important" }}>
          <MainContainer
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* <BaseCheckbox size={24} text="انتخاب همه" /> */}
              <StyledControledCheckbox
                fontSize={14}
                label="انتخاب همه"
                control={<Checkbox iconSize={24} />}
              />
              <Button
                variant="text"
                size="small"
                colorType="primary"
                startIcon={<CloseIcon size={20} />}
              >
                $X$ انتخاب شده
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                size="small"
                colorType="primary"
                startIcon={<PlusIcon size={20} />}
                onClick={handleCreateGroup}
              >
                ایجاد گروه
              </Button>
              <IconButton onClick={handleClose}>
                <CloseIcon size={24} />
              </IconButton>
            </Box>
          </MainContainer>
        </SectionContainer>
      )}
    </>
  );
}

export default Tabs;
