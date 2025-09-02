import { useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import GroupInfo from "./GroupInfo";
import { IUser } from "../../users/IUsers";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import GroupMembers from "./GroupMembers";
import { TickIcon } from "src/presentation/assets/icons/TickIcon";
import { usersInfo } from "src/presentation/data/data";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import GroupAccesses from "./GroupAccesses";
import { StyledCreateGroup } from "./CreateGroup.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

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
              <IconButtonWithBorder
               
              >
                <CloseIcon size={16} />
              </IconButtonWithBorder>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  bgcolor: "primary.main",
                  color: theme.palette.neutral.main,
                }}
              >
                <TickIcon size={16} />
              </IconButton>
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
