import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import Button from "@/presentation/components/common/buttons/Button";
import Checkbox from "@/presentation/components/common/checkbox/Checkbox";
import { StyledControledCheckbox } from "@/presentation/components/common/checkbox/Checkbox.styles";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import ListCard from "@/presentation/components/common/list-card/ListCard";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import TabPanel from "@/presentation/components/common/tabs/TabPanel";
import { usersInfo } from "@/presentation/data/data";
import {
  ButtonsContainer,
  CheckboxContainer,
  GroupCreatorMain,
  GroupCreatorSection,
  StyledCardsBox,
  StyledTabsHeader,
  Tab,
  Tabs,
} from "./RoleTabs.styles";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const ROLE = "مدیر IT";

function RoleTabs() {
  const [value, setValue] = useState(0);
  const [isSelectable, setIsSelectable] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleChange(_, newValue) {
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
        <StyledTabsHeader>
          <Tabs
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
          >
            <Tab label="همه کاربران" {...a11yProps(0)} />
            <Tab label="کاربران دارای نقش" {...a11yProps(1)} />
          </Tabs>
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
              <IconButton
                iconName="users"
                variant="outlined"
                onClick={createGroup}
              />
            ))}
        </StyledTabsHeader>

        <TabPanel value={value} index={0}>
          <StyledCardsBox>
            {usersInfo.map((user, index) => {
              const isIncluded = user.roles.includes(ROLE);

              return (
                <ListCard
                  columns="210px 135px 3.1fr 1fr"
                  item={{
                    avatar: user.image,
                    title: user.fullName,
                    caption: user.phone,
                    firstDetailItems: user.roles,
                    secondDetailItems: user.groups,
                    ...user,
                  }}
                  key={index}
                >
                  <ListCard.Title />

                  <ListCard.ShowFirstDetails label="نقش" />
                  <ListCard.ShowSecondDetails label="گروه" count={2} />

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
              );
            })}
          </StyledCardsBox>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <StyledCardsBox>
            {usersInfo
              .filter((user) => user.roles.includes(ROLE))
              .map((user, index) => (
                <ListCard
                  columns="210px 135px 3fr 1fr"
                  item={{
                    avatar: user.image,
                    title: user.fullName,
                    caption: user.phone,
                    firstDetailItems: user.roles,
                    secondDetailItems: user.groups,
                    ...user,
                  }}
                  key={index}
                  selectable={isSelectable}
                >
                  <ListCard.Title />

                  <ListCard.ShowFirstDetails label="نقش" />
                  <ListCard.ShowSecondDetails label="گروه" />

                  <ListCard.Operations>
                    <Button variant="outlined" size="small" colorType="error">
                      حذف
                    </Button>
                    <Button variant="outlined" size="small" colorType="primary">
                      مشاهده
                    </Button>
                  </ListCard.Operations>
                </ListCard>
              ))}
          </StyledCardsBox>
        </TabPanel>
      </SectionContainer>
      {isSelectable && (
        <GroupCreatorSection>
          <GroupCreatorMain>
            <CheckboxContainer>
              <StyledControledCheckbox
                fontSize={14}
                label="انتخاب همه"
                control={<Checkbox iconSize={24} />}
              />
              <Button
                variant="text"
                size="small"
                colorType="primary"
                rightIcon="close"
              >
                $X$ انتخاب شده
              </Button>
            </CheckboxContainer>

            <ButtonsContainer>
              {isDesktop ? (
                <Icon name="close" onClick={handleClose} />
              ) : (
                <Button
                  variant="outlined"
                  colorType="primary"
                  size="medium"
                  onClick={handleClose}
                >
                  لغو
                </Button>
              )}
              <Button
                variant="contained"
                size={isDesktop ? "small" : "medium"}
                colorType="primary"
                rightIcon={isDesktop ? "plus" : null}
                onClick={handleCreateGroup}
              >
                ایجاد گروه
              </Button>
            </ButtonsContainer>
          </GroupCreatorMain>
        </GroupCreatorSection>
      )}
    </>
  );
}

export default RoleTabs;
