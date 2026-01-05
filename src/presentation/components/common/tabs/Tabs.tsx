import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/presentation/components/common/buttons/Button";
import { usersInfo } from "@/presentation/data/data";
import { IconButtonWithBorder } from "../IconButtonWithBorder";
import Checkbox from "../checkbox/Checkbox";
import { StyledControledCheckbox } from "../checkbox/Checkbox.styles";
import { Icon } from "../icons/components/Icon";
import ListCard from "../list-card/ListCard";
import SectionContainer from "../section-container/SectionContainer";
import {
  ButtonsContainer,
  CheckboxContainer,
  GroupCreatorMain,
  GroupCreatorSection,
  StyledCardsBox,
  StyledTabs,
  StyledTabsHeader,
  Tab,
} from "./Tab.styles";
import TabPanel from "./TabPanel";

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
        <StyledTabsHeader>
          <StyledTabs
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
          </StyledTabs>
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
                <Icon name="users" w={16} h={16} />
              </IconButtonWithBorder>
            ))}
        </StyledTabsHeader>

        <TabPanel value={value} index={0}>
          <StyledCardsBox>
            {usersInfo.map((user, index) => {
              const isIncluded = user.roles.includes(ROLE);

              return (
                <ListCard
                  columns="2fr 1fr 3fr 1fr"
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
                  <ListCard.ShowSecondDetails label="گروه" />

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
          </StyledCardsBox>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <StyledCardsBox>
            {usersInfo
              .filter((user) => user.roles.includes(ROLE))
              .map((user, index) => (
                <ListCard
                  columns="2fr 1fr 3fr 1fr"
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

                // <RoleUserCard
                //   user={user}
                //   ROLE={ROLE}
                //   type="assigned"
                //   selectable={isSelectable}
                //   key={index}
                // />
              ))}
          </StyledCardsBox>
        </TabPanel>
      </SectionContainer>
      {isSelectable && (
        <GroupCreatorSection>
          <GroupCreatorMain>
            <CheckboxContainer>
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
                rightIcon="close"
              >
                $X$ انتخاب شده
              </Button>
            </CheckboxContainer>

            <ButtonsContainer>
              <Button
                variant="contained"
                size="small"
                colorType="primary"
                rightIcon={isDesktop ? "plus" : null}
                onClick={handleCreateGroup}
              >
                ایجاد گروه
              </Button>
              <IconButton onClick={handleClose}>
                <Icon name="close" />
              </IconButton>
            </ButtonsContainer>
          </GroupCreatorMain>
        </GroupCreatorSection>
      )}
    </>
  );
}

export default Tabs;
