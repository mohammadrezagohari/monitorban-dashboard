// import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { usersInfo } from "src/presentation/data/data";
import Button from "src/presentation/components/common/buttons/Button";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import ListCard from "src/presentation/components/common/list-card/ListCard";
import TabPanel from "src/presentation/components/common/tabs/TabPanel";
import {
  StyledCardBox,
  StyledTabs,
  StyledTabsHeader,
  Tab,
} from "./GroupTabs.styles";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const GROUP = "کاربران دانشگاه";

function GroupTabs() {
  const [value, setValue] = useState(0);
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleChange(event: SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <>
      <SectionContainer>
        <StyledTabsHeader>
          <StyledTabs
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
          </StyledTabs>
          {/* {value > 0 &&
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
                sx={{
                  border: `1px solid ${theme.palette.primary.dark}`,
                  borderRadius: "10px",
                  color: theme.palette.primary.dark,
                  padding: "7px",
                }}
                onClick={createGroup}
              >
                <UsersIcon size={16} />
              </IconButton>
            ))} */}
        </StyledTabsHeader>

        <TabPanel value={value} index={0}>
          <StyledCardBox>
            {usersInfo.map((user, index) => {
              const isIncluded = user.groups?.includes(GROUP);

              return (
                <ListCard
                  columns="2fr 1fr 3fr 1fr"
                  item={{
                    avatar: user.image,
                    title: user.fullName,
                    caption: user.position,
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
                        عضو این گروه
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        size="small"
                        colorType="success"
                      >
                        افزودن به گروه
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
          </StyledCardBox>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <StyledCardBox>
            {usersInfo
              .filter((user) => user.groups?.includes(GROUP))
              .map((user) => (
                <ListCard
                  columns="2fr 1fr 3fr 1fr"
                  item={{
                    avatar: user.image,
                    title: user.fullName,
                    caption: user.position,
                    firstDetailItems: user.roles,
                    secondDetailItems: user.groups,
                    ...user,
                  }}
                  key={user.id}
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
          </StyledCardBox>
        </TabPanel>
      </SectionContainer>
    </>
  );
}

export default GroupTabs;
