import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import IconButton from "src/presentation/components/common/icon-button/IconButton";
import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { usersInfo } from "src/presentation/data/data";
import { IUser } from "../../users/IUsers";
import { StyledCreateGroup } from "./CreateGroup.styles";
import GroupAccesses from "./GroupAccesses";
import GroupInfo from "./GroupInfo";
import GroupMembers from "./GroupMembers";

function CreateGroup() {
  const groupMembers: IUser[] = usersInfo || [];
  // const groupMembers: IUser[] = [];
  const [accesses, setAccesses] = useState<string[]>([]);
  const {
    image: avatar,
    fullName: userName,
    phone,
    roles = [],
    groups = [],
  } = usersInfo[0];
  // const visibleRoles = roles.length > 2 ? roles.slice(1, 3) : roles;
  // const visibleGroups = groups.length > 2 ? groups?.slice(1, 3) : groups;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  function deleteAccess(access: string) {
    setAccesses((prevAccesses) =>
      prevAccesses.filter((item) => item !== access)
    );
  }

  return (
    <>
      <PageTitle title="ایجاد گروه">
        <Box
          sx={{ display: "flex", alignItems: "center", gap: { xs: 1, lg: 2 } }}
        >
          {isDesktop ? (
            <>
              <Button variant="outlined" size="small" colorType="primary">
                انصراف
              </Button>
              <Button variant="contained" size="small" colorType="primary">
                ذخیره
              </Button>
            </>
          ) : (
            <>
              <IconButton iconName="close" variant="outlined" />

              <IconButton iconName="tick" />
            </>
          )}
        </Box>
      </PageTitle>

      <StyledCreateGroup>
        <GroupInfo />

        <GroupMembers members={groupMembers} />

        <GroupAccesses accesses={accesses} deleteAccess={deleteAccess} />
      </StyledCreateGroup>
    </>
  );
}

export default CreateGroup;
